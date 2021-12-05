from __future__ import print_function
import keras
from keras.layers import Dense, Conv2D, BatchNormalization, Activation
from keras.layers import AveragePooling2D, Input, Flatten
from keras.optimizers import Adam
from keras.callbacks import ModelCheckpoint, LearningRateScheduler
from keras.callbacks import ReduceLROnPlateau
from keras.preprocessing.image import ImageDataGenerator
from keras.regularizers import l2
from keras import backend as K
from keras.models import Model
from keras.datasets import cifar10
import numpy as np
import os

"""
0 : airplane
1 : automobile
2 : bird
3 : cat
4 : deer
5 : dog
6 : frog
7 : horse
8 : ship
9 : truck
"""
import PIL
from PIL import Image
from PIL import *
import os
from array import *
from scipy.misc import *

def rescale_image(image_file):
    print(image_file)
    im = imresize(imread(image_file, 0, 'RGB'), (32, 32, 3))
    return im

def load_and_scale_imgs(img_files):
    imgs = [rescale_image(img_file) for img_file in img_files]
    return np.array(imgs)

model = load_model("screen_36/resources/python_code/save1.h5")   # This the last model we saved
imgs = load_and_scale_imgs(['my_image/car.png', 'my_image/cat.png', 'my_image/dog.png'])
predictions = model.predict(imgs/255)

print(np.argmax(predictions[0]))
print(np.argmax(predictions[1]))
print(np.argmax(predictions[2]))