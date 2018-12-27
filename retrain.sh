#!/bin/bash

echo ""

python ../tensorflow/hub/examples/image_retraining/retrain.py \
    --image_dir ./resources/training_data/goomba-not-goomba/data/ \
    --learning_rate=0.0001 \
    --testing_percentage=20 \
    --validation_percentage=20 \
    --train_batch_size=32 \
    --validation_batch_size=-1 \
    --flip_left_right True \
    --random_scale=30 \
    --random_brightness=30 \
    --eval_step_interval=100 \
    --how_many_training_steps=600 \
    --architecture mobilenet_1.0_224
    