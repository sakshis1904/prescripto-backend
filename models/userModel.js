import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    image: {type:String, default:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALUAAACUCAMAAADifZgIAAAAM1BMVEXm5uampqasrKzi4uKjo6Pp6emgoKC/v7+vr6/Ly8vR0dGysrK8vLzd3d3CwsK3t7fX19e0bNfYAAADjElEQVR4nO2c25arIAxAFYmKivr/XzvS+zitVXLDc9hPM297ZQUSILYoMplMJpPJZDKZTCaTyfyzwMLvP1Jn8fTdOPWtMabtp7HzJzD3rrd1bcs74Z/eeW2tDcC7qXwxfpqXk/NpBhz82Nq/yjdx244JekMxLm4fnC/eZTkWaXlD0Zl6Q/lKbbqUvKEaPubG7zwZqmS0Ye73OF+8+zkRbeg2E3qlXXZJaMP4PaNfqccEtMEdk160nbo2uP3Zccdqay85HYNubsO8a8f7E2yru5OYGOlF2yg6w3B0Jd6pB7VgQxcX6Uu0tVIbqhZh3WrV9jFeetEedaR95FK8WRuVA87xovgbpRKJcg4oOEOHC/USbIVtBHb31J+wvbx1hXQOVNLSmArzCLZ8igwEsR6kpQt0WofEFnYGbwhibYQvdiJPA2uEExscibV0eUR1TnfEO6hzWjck1o2w9UBiPchWx+qU1ifNkHOuxlNan7PKnLSin7J7KqqWwLoVP8yc8lQQc9u+Rv72HTxBrOVfewGf2K3CfQjywkzrygxtreBcALKoW513R+x6VBp1QXWr4l3qDZgxVd1oPd5hKo3m+270tZn4ZdkL4KOtNYegYkuN8thC3KattFW/EHHFYOXvrVdANR2eaplSGNnqD04QKW4fL8ChGmmbBAJ9we0eMrOl05Z9APPO6QXbpjLOF4BqV5bYJoV1+ABClnzHFQnNqULhx11TF9aMPhVvmBvzZlb8rXZtmiQyG4rhwJhq2EUG9XBD4XaG+TXgTtcb5imqe5oU0yRM5UdOIepN6y+NE+IEptVCHRkWfxfuTsF5Oeoib3EUDrwEDzNW/PEfe1128xY+iTXYq8krteQF1NEPIDa05aJN8bpxR2xJEr013pF5c4QZtU+vsaVEdUfNir/VlpgfP3Yi36XNf2qHmVp60WbPEZL38zXsY+/k+RHgfu2YGZwDM6s1oqPewk6Mzvip/E9wTusD8Vb9xPK9qfOFmjXYTFkdYMts4NpArjCVGprzyye4zjWe4FOCDeuepUAyJwhXirAU8yc8Zb1CfRi4w9pwTPcxtKgrbYZmBD+d9Q2Ox3X8N3bf4PgGD5idA/TWFXeCLClCvhxhFrAm37H5FyPHcuRtQq7QtyIwsUuX5URu3QtY0299FBP532ippU9qzXHntIb8t1C4O74AQ9fXG37o57gqCcitM5lMJpP5T/gBH4gwlmVs8okAAAAASUVORK5CYII="},
    address: {type:Object, default:{line1:'', line2:''}},
    gender: {type:String, default:"Not Selected"},
    dob: {type:String, default:"Not Selected"},
    phone: {type:String, default:"0000000000"}
})  

const userModel = mongoose.models.user || mongoose.model('user', userSchema)

export default userModel;
