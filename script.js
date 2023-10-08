document.getElementById('whisperForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const textInput = document.getElementById('textInput').value;
    const fileInput = document.getElementById('fileInput').files[0];

    const formData = new FormData();
    formData.append('text', textInput);
    formData.append('file', fileInput);

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
        outputDiv.innerHTML = `<h2>Whisper API Response:</h2><pre>${JSON.stringify(data, null, 2)}</pre>`;
    })
    .catch(error => console.error('Error:', error));
});
