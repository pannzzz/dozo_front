import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const [user, setUser] = useState(null); // Estado para almacenar la información del usuario
    const [loading, setLoading] = useState(true); // Estado para manejar la carga
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await fetch("https://dozo01.pythonanywhere.com/api/user/profile/", {
                    credentials: "include", // Incluir cookies para mantener la sesión
                });

                if (!response.ok) {
                    throw new Error("Error al obtener el perfil del usuario.");
                }

                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error("Error al cargar el perfil:", error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        fetchUserProfile();
    }, []);

    if (loading) {
        return <p>Cargando...</p>;
    }

    if (!user) {
        return <p>Error al cargar el perfil del usuario o el usuario no está autenticado.</p>;
    }

    const handleLogout = () => {
        fetch("https://dozo01.pythonanywhere.com/logout/", {
            method: "POST",
            credentials: "include",
        })
            .then(() => {
                setUser(null);
                navigate("/login");
            })
            .catch((error) => console.error("Error al cerrar sesión:", error));
    };

    return (
        <div>
            <h1>Bienvenido, {user.first_name}!</h1>
            <p>Correo: {user.email}</p>
            <button onClick={handleLogout}>Cerrar sesión</button>
        </div>
    );
};

export default MainPage;
