// Zod--> for better input validation --> npm install zod
const express = require("express")
const zod = require("zod")
const app = express();
app.listen(3000);
app.use(express.json());


const schema = zod.array(zod.number());  // setting schema that in the array(kidneys) there will be number only
// const newScheme = zod.object({
//     email: zod.string(),
//     password: zod.string(),
//     country: z.literal("IN").or(z.literal("US")),
//     kidneys: zod.array(z.number())
// })

app.post("/", function(req , res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    // const kidneyLength = kidneys.length;
    res.send({response})
    // res.json("You have " + kidneyLength + " kidneys");
})

// "safe" parsing (doesn't throw error if validation fails)
//mySchema.safeParse("tuna"); // => { success: true; data: "tuna" }
//mySchema.safeParse(12); // => { success: false; error: ZodError }