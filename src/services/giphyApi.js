const GIPHY_API_URL = "https://api.giphy.com/v1/gifs";

export async function fetchGifsByIds(ids) {
	const apiKey = import.meta.env.VITE_GIPHY_API_KEY;

	if (!apiKey) {
		throw new Error("GIPHY API key is missing.");
	}

	const params = new URLSearchParams({
		api_key: apiKey,
		ids: ids.join(","),
		rating: "g",
	});

	const response = await fetch(`${GIPHY_API_URL}?${params}`);

	if (!response.ok) {
		throw new Error(`GIPHY request failed: ${response.status}`);
	}

	const result = await response.json();

	return result.data.map((gif) => ({
		id: gif.id,
		title: gif.title,
		imageUrl: gif.images.fixed_height.url,
	}));
}