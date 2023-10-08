document.getElementById('transcriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fileInput = document.getElementById('fileInput').files[0];

    const formData = new FormData();
    formData.append('audio', fileInput);
    formdata.append("model", "whisper-1");
    formdata.append("response_format", "json");
    formdata.append("temperature", "0");
    formdata.append("language", "en")

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
