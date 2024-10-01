import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
    firstName: z
        .string()
        .min(3, {message: "Le prénom doit avoir au moins 3 caractères"}),
    age: z
        .number()
        .min(18, {message: "L'âge doit être au minimum de 18 ans"})    
});

function AppExercice7 () {
    const [person, setPerson] = useState(null);
    const { register, handleSubmit, reset, formState:{errors, isValid}} = useForm({resolver: zodResolver(schema)});
    const onSubmit = (data) => {
        setPerson(data);
        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>My form</h1>
                <label>Age</label>
                <br/>
                <input
                    {...register("age", {valueAsNumber: true})}
                    id="age"
                    type="number"
                    step="any" 
                    required
                />
                <br/><br/>
                <label>Nom</label>
                <br/>
                <input type="text" name="nom"></input>
            </form>
        </>
    )
}

export default AppExercice7;