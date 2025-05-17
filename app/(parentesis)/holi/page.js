"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

export default function Holi() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Configuración de React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nombre: "",
      estado: "",
    },
  });

  // Lista de estados de México
  const estadosMexico = [
    "Aguascalientes",
    "Baja California",
    "Baja California Sur",
    "Campeche",
    "Chiapas",
    "Chihuahua",
    "Ciudad de México",
    "Coahuila",
    "Colima",
    "Durango",
    "Estado de México",
    "Guanajuato",
    "Guerrero",
    "Hidalgo",
    "Jalisco",
    "Michoacán",
    "Morelos",
    "Nayarit",
    "Nuevo León",
    "Oaxaca",
    "Puebla",
    "Querétaro",
    "Quintana Roo",
    "San Luis Potosí",
    "Sinaloa",
    "Sonora",
    "Tabasco",
    "Tamaulipas",
    "Tlaxcala",
    "Veracruz",
    "Yucatán",
    "Zacatecas",
  ];

  const onSubmit = async (data) => {
    console.log("data", data);

    try {
      setIsSubmitting(true);

      // Enviando datos a la API
      console.log("enviando datos", data);
      const response = await axios.post("/api/recibirestados", data);
      console.log("respuesta recibida", response);

      // Mostrar toast de éxito
      toast.success("¡Formulario enviado con éxito!");

      // Resetear formulario
      setTimeout(() => {
        setIsSubmitting(false);
        reset();
      }, 1000);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      toast.error("Error al enviar los datos");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="flex flex-col w-full items-center py-8 bg-yellow-300 min-h-screen">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
            borderRadius: "0",
            border: "3px solid #fff",
            fontWeight: "bold",
            padding: "16px",
          },
        }}
      />

      <div className="max-w-2xl w-full bg-black text-white p-8 border-8 border-white mx-4 transform rotate-1">
        <h2 className="text-3xl font-extrabold mb-8 uppercase tracking-wider text-yellow-300 -rotate-2 transform">
          REGISTRO
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Campo de nombre */}
          <div className="mb-6 transform -rotate-1">
            <label
              className="block text-lg font-extrabold mb-2 uppercase tracking-wide text-yellow-300"
              htmlFor="nombre"
            >
              NOMBRE
            </label>
            <input
              type="text"
              id="nombre"
              placeholder="ESCRIBE TU NOMBRE"
              className={`w-full px-4 py-3 bg-white text-black font-bold border-4 
                ${
                  errors.nombre ? "border-red-500" : "border-white"
                } placeholder-gray-500 text-lg uppercase`}
              style={{ transform: "skew(-2deg)" }}
              {...register("nombre", {
                required: "EL NOMBRE ES REQUERIDO",
              })}
            />
            {errors.nombre && (
              <p className="text-red-500 text-lg font-bold mt-2 uppercase">
                {errors.nombre.message}
              </p>
            )}
          </div>

          {/* Selector de estado */}
          <div className="mb-6 transform rotate-1">
            <label
              className="block text-lg font-extrabold mb-2 uppercase tracking-wide text-yellow-300"
              htmlFor="estado"
            >
              ESTADO
            </label>
            <select
              id="estado"
              className={`w-full px-4 py-3 bg-white text-black font-bold border-4 
                ${
                  errors.estado ? "border-red-500" : "border-white"
                } text-lg appearance-none`}
              style={{ transform: "skew(2deg)" }}
              {...register("estado", {
                required: "SELECCIONA UN ESTADO",
              })}
            >
              <option value="">SELECCIONA UN ESTADO</option>
              {estadosMexico.map((estado) => (
                <option key={estado} value={estado}>
                  {estado.toUpperCase()}
                </option>
              ))}
            </select>
            {errors.estado && (
              <p className="text-red-500 text-lg font-bold mt-2 uppercase">
                {errors.estado.message}
              </p>
            )}
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-yellow-300 text-black font-extrabold py-4 px-6 text-xl uppercase tracking-wider border-4 border-white hover:bg-yellow-400 transition-colors transform -rotate-1 hover:rotate-0"
            style={{ marginTop: "30px" }}
          >
            {isSubmitting ? "ENVIANDO..." : "ENVIAR →"}
          </button>
        </form>
      </div>
    </main>
  );
}
