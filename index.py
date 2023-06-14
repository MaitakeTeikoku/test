from pyodide import loadPackage
loadPackage("OpenCV")

# OpenCVを利用可能にする
import cv2
# 画像の読み込み
image = cv2.imread('./maitake_white.png')

# 画像をグレースケールに変換
gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)