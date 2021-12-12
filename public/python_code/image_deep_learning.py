import sys, os
import base64

import cv2

import tensorflow as tf
import keras
from keras.layers import Dense, Conv2D, BatchNormalization, Activation
from keras.layers import AveragePooling2D, Input, Flatten
from tensorflow.keras.optimizers import Adam
from keras.callbacks import ModelCheckpoint, LearningRateScheduler
from keras.callbacks import ReduceLROnPlateau
from keras.preprocessing.image import ImageDataGenerator
from keras.regularizers import l2
from keras import backend as K
from keras.models import Model
import numpy as np
from array import *
from scipy.misc import *

"""
# base64 받음
inputs = sys.stdin.read()

binary_arry = base64.b64decode(inputs)
binary_np = np.frombuffer(binary_arry, dtype=np.uint8)

# data cv2 np convert
img_np = cv2.imdecode(binary_np, cv2.IMREAD_ANYCOLOR) # 이미지 상태!

# # image change
# 네모 모양의 검은색 색칠
img_np[0:50, 0:50] = 0

# convert bytes
_, imen = cv2.imencode('.jpeg', img_np)
imenb = imen.tobytes()

# cv2.imshow('decoding', img_np)

# python의 endcode는 base64 문자열의 bytes타입으로 바꿔주므로, 다시 문자열로 decode
result = base64.b64encode(imenb).decode()
print("-------------")
print(result)"""
