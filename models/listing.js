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
        set: (v)=> v==="" ? "https://dongardner.com/cdn/shop/articles/706-front-1.jpg?v=1713538108&width=1100" : v
    },
    price: Number,
    location: String,
    country:String,
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        },
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"

    }
});

listingSchema.post("findOneAndDelete", async(listing)=>{
    if(listing){
        await Review.deleteMany({_id: {$in:listing.reviews}})
    }
})

const Listing = mongoose.model("listing",listingSchema);

module.exports=Listing;