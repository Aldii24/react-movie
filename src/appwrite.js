import { Client, Databases, ID, Query } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;


const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID)

const database = new Databases(client)

export const updateSearchCount = async (searchTerm, movie) => {
    try {
        // Cek apakah ada dokumen di database dengan searchTerm yang sama dengan inputan search dari user
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID,
            [Query.equal('searchTerm', searchTerm)]
        )

        // Kalo ada dokumennya, update countnya
        if (result.documents.length > 0) {
            const doc = result.documents[0];

            await database.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
                count: doc.count + 1,
            })
            // Kalo ga ada dokumennya, buat dokumen baru dan masukin informasinya sesuai dengan yang ada di database
        } else {
            await database.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
                searchTerm,
                count: 1,
                movie_id: movie.id,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            })
        }

    } catch (error) {
        console.log(error);
    }
}

export const getTrendingMovies = async () => {
    try {
        const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID,
            [Query.limit(5), Query.orderDesc('count')]
        )

        return result.documents;
    } catch (error) {
        console.log(error);
    }
}