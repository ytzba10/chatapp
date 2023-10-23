import mongoose from 'mongoose';


/** @type {import('./$types').PageServerLoad} */


const mongo_username = import.meta.env.VITE_MONGO_USERNAME;

const mongo_password = import.meta.env.VITE_MONGO_PASSWORD;

await mongoose.connect(`mongodb+srv://${mongo_username}:${mongo_password}@cluster0.atsrqai.mongodb.net/uni_auth`)

export async function load({ params }) {


    console.log()
    if ( params && params.business_id !== undefined ) {

        return {
            business_id : params.business_id,
        };
    } else {
        
    }
    

};  