import vlc
from ctypes import cast, POINTER
from comtypes import CLSCTX_ALL
from pycaw.pycaw import AudioUtilities, IAudioEndpointVolume

# Mendapatkan perangkat audio (speaker)
devices = AudioUtilities.GetSpeakers()
interface = devices.Activate(
    IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
volume = cast(interface, POINTER(IAudioEndpointVolume))

# Mengatur path file baru (MRL baru)
new_mrl = r"C:\Users\LOQ 1\OneDrive\Documents\Test-Coding\audio\wesi.mp3"

# Membuat player instance dengan MRL baru
player = vlc.MediaPlayer(new_mrl)

# Mengatur volume ke level tertentu (dalam skala 0.0 hingga 1.0)
volume.SetMasterVolumeLevelScalar(.7, None)  # Mengatur volume ke 100%

is_muted = volume.GetMute()  # Mengecek apakah sistem audio sedang di-mute
if is_muted:
    volume.SetMute(0, None)  # Menonaktifkan mute pada sistem audio

# Mendapatkan level volume saat ini
current_volume = volume.GetMasterVolumeLevelScalar()
print(f"Current volume: {current_volume * 100}%")

# Memutar audio
player.play()

# Mengatur volume ke 150% (skala dari 0 hingga 200)
player.audio_set_volume(200)

# Memastikan audio tetap berjalan
import time
time.sleep(10)  # Pemutar audio tetap berjalan selama 10 detik


