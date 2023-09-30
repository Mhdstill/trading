export const API_BASE_URL = 'https://localhost'; // Remplacez par l'URL de votre API

// Fonction générique pour effectuer des appels API avec fetch
export const callApi = async (url, method, data) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${url}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        // Vous pouvez également ajouter des en-têtes d'authentification ici si nécessaire
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Erreur HTTP ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Erreur API :', error);
    throw error;
  }
};