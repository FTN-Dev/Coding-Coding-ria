import socket
import cv2
import numpy as np
import tkinter as tk
from PIL import Image, ImageTk
import threading

# Setup socket untuk menerima stream
server_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
server_socket.bind(('10.132.12.46', 5000))

# Ukuran buffer yang besar untuk menerima frame
BUFFER_SIZE = 65536

# Inisialisasi variabel global
frame_data = None
is_streaming = True

def receive_frames():
    global frame_data, is_streaming
    while is_streaming:
        # Terima data dari HP
        packet, _ = server_socket.recvfrom(BUFFER_SIZE)
        # Dekompresi data menjadi frame
        frame_data = np.frombuffer(packet, dtype=np.uint8)
        frame_data = cv2.imdecode(frame_data, cv2.IMREAD_COLOR)

def update_gui():
    global frame_data, root, is_streaming
    
    if frame_data is not None:
        # Konversi frame dari OpenCV ke format yang dapat ditampilkan oleh Tkinter
        frame_rgb = cv2.cvtColor(frame_data, cv2.COLOR_BGR2RGB)
        img = Image.fromarray(frame_rgb)
        imgtk = ImageTk.PhotoImage(image=img)
        label.imgtk = imgtk
        label.configure(image=imgtk)

    if is_streaming:
        root.after(30, update_gui)

def stop_stream():
    global is_streaming
    is_streaming = False
    root.quit()

# GUI dengan Tkinter
root = tk.Tk()
root.title("HP Screen Stream")

# Label untuk menampilkan frame
label = tk.Label(root)
label.pack()

# Tombol untuk menghentikan stream
stop_button = tk.Button(root, text="Stop Stream", command=stop_stream)
stop_button.pack()

# Thread untuk menerima frame dari HP
threading.Thread(target=receive_frames).start()

# Update GUI secara berkala untuk menampilkan frame
root.after(30, update_gui)
root.mainloop()

# Setelah GUI selesai, tutup socket
server_socket.close()
