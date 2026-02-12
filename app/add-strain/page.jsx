"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AddStrain() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit() {
    const { error } = await supabase
      .from("strains")
      .insert([{ name, description }]);

    if (error) setMessage(error.message);
    else setMessage("Strain added successfully!");
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Add New Strain</h1>

      <input
        placeholder="Strain Name"
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleSubmit}>Save Strain</button>

      <p>{message}</p>
    </div>
  );
}
