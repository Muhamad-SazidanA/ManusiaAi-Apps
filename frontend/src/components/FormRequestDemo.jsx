// React (frontend/src/components/FormRequestDemo.jsx)

const handleSubmit = async (e) => {
  e.preventDefault();

  const data = { name, email, company, phone, linkedin, message };

  const response = await fetch('http://localhost:3000/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    alert('Pesan berhasil dikirim!');
  } else {
    alert('Gagal mengirim pesan.');
  }
};
