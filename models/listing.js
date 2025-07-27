const mongoose = require("mongoose");
const Review = require("./review");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type:String,
        set: (v)=> v==="" ? "https://unsplash.com/photos/trees-beside-white-house-IYfp2Ixe9nM" : v
    },
    price: Number,
    location: String,
    country:String,
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ]
});

listingSchema.post("findOneAndDelete", async(listing)=>{
    if(listing){
        await Review.deleteMany({_id: {$in:listing.reviews}})
    }
})

const Listing = mongoose.model("listing",listingSchema);

module.exports=Listing;