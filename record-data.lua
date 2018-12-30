--
-- Chuck Marshall <cmarshal@zenprogramming.com>
--

RUN_NUM = 0
BUTTONS_FILE = nil
SCREENSHOT_FILE = nil
FRAME_NUM = 0
IS_RUNNING = false

savestate.registerload(function()
  if IS_RUNNING then
    FRAME_NUM = 0
    os.execute("cd ..")
  end

  RUN_NUM = RUN_NUM + 1
  os.execute("mkdir runs/run_" .. RUN_NUM)
  IS_RUNNING = true
end)

while true do
  if IS_RUNNING then
    BUTTONS_FILE = io.open("runs/run_" .. RUN_NUM .. "/buttons_" .. FRAME_NUM, "a")

    -- save button states
    buttons = joypad.get(1)
    if buttons["up"] then
      BUTTONS_FILE:write("1")
    else
      BUTTONS_FILE:write("0")
    end

    if buttons["down"] then
      BUTTONS_FILE:write("1")
    else
      BUTTONS_FILE:write("0")
    end

    if buttons["left"] then
      BUTTONS_FILE:write("1")
    else
      BUTTONS_FILE:write("0")
    end

    if buttons["right"] then
      BUTTONS_FILE:write("1")
    else
      BUTTONS_FILE:write("0")
    end

    if buttons["A"] then
      BUTTONS_FILE:write("1")
    else
      BUTTONS_FILE:write("0")
    end

    if buttons["B"] then
      BUTTONS_FILE:write("1")
    else
      BUTTONS_FILE:write("0")
    end

    BUTTONS_FILE:close()

    -- save screenshot
    gui.savescreenshotas("runs/run_" .. RUN_NUM .. "/screenshot_" .. FRAME_NUM .. ".png")

    -- increase the frame number
    FRAME_NUM = FRAME_NUM + 1
  end

  -- advance the frame
  emu.frameadvance()
end

