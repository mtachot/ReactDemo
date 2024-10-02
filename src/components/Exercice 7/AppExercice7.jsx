import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
    firstName: z
        .string()
        .min(2, {message: "Le prénom doit avoir au moins 2 caractères"}),
    age: z
        .number()
        .min(18, {message: "L'âge doit être au minimum de 18 ans"})    
});

function AppExercice7 () {
    const [person, setPerson] = useState({});
    const { register, handleSubmit, reset, formState:{errors}} = useForm({resolver: zodResolver(schema)});
    const onSubmit = (data) => {
        setPerson(data);
        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <h1>My form</h1>
                    <label htmlFor="age" className="form-label">Âge</label>
                    <br/>
                    <input
                        {...register("age", {valueAsNumber: true})}
                        id="age"
                        type="number"
                        className="form-control"
                        step="any" 
                        required
                    />
                    {errors.age && (
                        <p className="text-danger">{errors.age.message}</p>
                    )}
                </div>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">Prénom</label>
                    <br/>
                    <input 
                        {...register("firstName")}
                        id="firstName"
                        type="text"
                        className="form-control"
                        required
                    />
                    {errors.firstName && (
                        <p className="text-danger">{errors.firstName.message}</p>
                    )}
                </div>
                <button className="btn btn-primary" type="submit">
                    Valider
                </button>
                {person && <div><div>Données envoyées: </div><div>Prénom: {person.firstName} - Âge: {person.age}</div></div>}
            </form>
        </>
    )
}

export default AppExercice7;