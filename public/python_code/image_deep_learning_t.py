import sys
import base64
import numpy as np
import cv2
import matplotlib.pyplot as plt

# base64 받음


fileNm = '../../b.txt'
fileWNm = '../../wb.txt'
with open(fileNm, mode='r', encoding='cp949') as file1:
    lines = file1.readlines()
    # for i in range(0,len(lines)):
    for i in range(0,len(lines)):
        # base64 받음        
        if lines[i] != '\n':
            inputs = lines[i].replace("\n","")
            # print(inputs)

            binary_arry = base64.b64decode(inputs)
            binary_np = np.frombuffer(binary_arry, dtype=np.uint8)
            
            # data cv2 np convert
            img_np = cv2.imdecode(binary_np, cv2.IMREAD_ANYCOLOR)

            # # image change
            # 네모 모양의 검은색 색칠
            # img_np[0:50, 0:50] = 0

            # convert bytes
            _, imen = cv2.imencode('.jpeg', img_np)
            imenb = imen.tobytes()

            cv2.imshow('decoding', img_np)
            
            # python의 endcode는 base64 문자열의 bytes타입으로 바꿔주므로, 다시 문자열로 decode
            result = base64.b64encode(imenb).decode()
            # print("-------------")
            # print(result)
        
            


