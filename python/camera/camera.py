import cv2
import mediapipe as mp
import time
import os

# Tentukan folder untuk menyimpan hasil
output_folder = r"C:\Users\LOQ 1\OneDrive\Documents\Test-Coding\python\camera\hasil"

# Buat folder "camera" jika belum ada
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Inisialisasi MediaPipe Hands
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(static_image_mode=False, max_num_hands=2, min_detection_confidence=0.5, min_tracking_confidence=0.5)
mp_drawing = mp.solutions.drawing_utils

# Buka kamera
cap = cv2.VideoCapture(0)

# Timer dan deteksi gesture
start_time = None
capture_ready = False

def is_pinch_gesture(landmarks):
    """
    Fungsi untuk memeriksa apakah jari telunjuk dan ibu jari menjepit pada satu tangan.
    """
    if len(landmarks) < 1:
        return False
    
    # Ambil posisi ibu jari dan telunjuk
    hand = landmarks[0].landmark
    thumb_tip = hand[mp_hands.HandLandmark.THUMB_TIP]
    index_tip = hand[mp_hands.HandLandmark.INDEX_FINGER_TIP]
    
    # Hitung jarak antara ibu jari dan telunjuk
    distance = ((thumb_tip.x - index_tip.x) ** 2 + (thumb_tip.y - index_tip.y) ** 2) ** 0.5
    
    # Jika jaraknya kurang dari threshold tertentu, dianggap sebagai gesture menjepit
    if distance < 0.05:  # Adjust the threshold value if needed
        return True
    return False

while cap.isOpened():
    success, image = cap.read()
    if not success:
        print("Tidak dapat mengakses kamera")
        break

    # Membalik gambar untuk pengalaman yang lebih alami
    image = cv2.flip(image, 1)
    # Konversi BGR ke RGB
    image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    # Proses deteksi tangan
    results = hands.process(image_rgb)

    # Jika ada tangan yang terdeteksi
    if results.multi_hand_landmarks:
        for hand_landmarks in results.multi_hand_landmarks:
            # Gambar garis dan titik pada tangan
            mp_drawing.draw_landmarks(image, hand_landmarks, mp_hands.HAND_CONNECTIONS)
        
        # Cek gesture menjepit
        if is_pinch_gesture(results.multi_hand_landmarks):
            if not capture_ready:
                # Mulai timer jika gesture terdeteksi
                start_time = time.time()
                capture_ready = True
            elif time.time() - start_time >= 3:
                # Ambil foto setelah 3 detik
                filename = os.path.join(output_folder, "captured_image.jpg")
                cv2.imwrite(filename, image)
                print(f"Foto diambil dan disimpan di {filename}!")
                capture_ready = False
        else:
            # Reset timer jika gesture tidak terdeteksi
            capture_ready = False
            start_time = None

    # Tampilkan UI untuk hitungan mundur jika sedang bersiap untuk mengambil gambar
    if capture_ready:
        countdown = 3 - int(time.time() - start_time)
        cv2.putText(image, f"Mengambil foto dalam {countdown}s", (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

    # Tampilkan hasil di jendela
    cv2.imshow("Hand Tracking", image)

    # Keluar jika tombol 'q' ditekan
    if cv2.waitKey(5) & 0xFF == ord('q'):
        break

# Tutup kamera dan jendela
cap.release()
cv2.destroyAllWindows()
