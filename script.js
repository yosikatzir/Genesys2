document.getElementById('transcriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput').files[0];

    const formData = new FormData();
    formData.append('audio', fileInput);
    formData.append("model", "whisper-1");
    formData.append("response_format", "json");
    formData.append("temperature", "0");
    formData.append("language", "en");

    fetch('https://api.openai.com/v1/audio/transcriptions', {
        method: 'POST',
        body: formData,
        headers: {
            'Authorization': 'Bearer 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'
        }
    })
    .then(response => response.json())
    .then(data => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `<h2>Transcription Result:</h2><p>${data.text}</p>`;
    })
    .catch(error => console.error('Error:', error));
});
