onload = () => {
  document.body.classList.remove("container");
};

// document.addEventListener("DOMContentLoaded", () => {
//   const audioElement = document.getElementById("background-audio");

//   // Mengatur audio agar diputar secara otomatis
//   audioElement.loop = true; // Audio akan terus diputar ulang
//   audioElement.volume = 0.5; // Setel volume audio (nilai antara 0.0 hingga 1.0)

//   // Cobalah memutar audio
//   audioElement
//     .play()
//     .then(() => {
//       console.log("Audio is playing automatically.");
//     })
//     .catch((error) => {
//       console.error("Audio autoplay failed:", error);
//     });
// });

document.addEventListener("DOMContentLoaded", () => {
  const audioElement = document.getElementById("background-audio");

  audioElement.loop = true;
  audioElement.volume = 0.5;

  // Aktifkan audio setelah interaksi pengguna
  document.body.addEventListener("click", () => {
    audioElement.muted = false;
    audioElement
      .play()
      .catch((err) => console.error("Error playing audio:", err));
  });

  console.log("Audio setup complete.");
});
