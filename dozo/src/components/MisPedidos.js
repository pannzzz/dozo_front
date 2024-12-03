import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/Mispedidos.css';
import FooterComponent from '../components/FooterComponent';

const MisPedidos = () => {
    const [pedidos, setPedidos] = useState([]);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    // Definimos fetchPedidos fuera del useEffect
    const fetchPedidos = async () => {
        try {
            const response = await axios.get('https://dozo01.pythonanywhere.com/api/pedidos/', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setPedidos(response.data.pedidos || []);
            setError(false); // Restablecer el estado de error si la solicitud es exitosa
        } catch (err) {
            console.error('Error al obtener los pedidos:', err);
            setError(true);
        }
    };

    useEffect(() => {
        fetchPedidos();
    }, []);

    const handleRetry = () => {
        fetchPedidos(); // Reintentar la solicitud al presionar el botón
    };

    const handleMoreDetails = (id) => {
        navigate(`/detalles-pedido/${id}`);
    };

    if (error) {
        return (
            <>
                <Navbar initialScrolled={true} />
                <div className="carrito-page1">
                    <h2 className="error">Hubo un problema al cargar tus pedidos.</h2>
                    <button className="retry-button" onClick={handleRetry}>
                        Reintentar
                    </button>
                </div>
                <FooterComponent />
            </>
        );
    }

    if (pedidos.length === 0) {
        return (
            <>
                <Navbar initialScrolled={true} />
                <div className="carrito-page1">
                    <h2>No has realizado ningún pedido.</h2>
                </div>
                <FooterComponent />
            </>
        );
    }

    return (
        <>
            <Navbar initialScrolled={true} />
            <div className="carrito-page1">
                <div className="breadcrumb-containermispedidos">
                    <a href="/" className="breadcrumb-more">Dozo</a> / 
                    <a href="/findgift" className="breadcrumb-more">Search</a> / Mis Pedidos
                </div>

                <section className="add-sectionGeneralzzz">
                    <div className="add-l-innerzzz">
                        <h2 className="add-sectionTitlezzz">
                            <span className="add-sectionTitle__text-03zzz">
                                Mis Pedidos ({pedidos.length} pedido{pedidos.length > 1 ? 's' : ''})
                            </span>
                        </h2>
                    </div>
                </section>

                <div className="carrito-productoszzz">
                    {pedidos.map((pedido) => (
                        <div key={pedido.id} className="carrito-productozzz">
                            <img
                                src={`https://i.pinimg.com/736x/44/82/a9/4482a9b72bed00a223e97405a8ce91e2.jpg`}
                                alt="Imagen del producto"
                                className="producto-imagenzzz"
                            />
                            <div className="producto-detallezzz">
                                <div className="nombrezzz">
                                    <h3>Pedido ID: {pedido.id}</h3>
                                    <p className="estado">
                                        <strong>Estado:</strong> {pedido.estado}
                                    </p>
                                </div>
                                <p>
                                    <strong>Fecha:</strong> {pedido.fecha_venta}
                                </p>
                                <p>
                                    <strong>Total:</strong> {pedido.total.toLocaleString('es-CO')} COP
                                </p>
                            </div>
                            <div className="producto-cantidadzzz">
                                <span>{pedido.productos.length} producto{pedido.productos.length > 1 ? 's' : ''}</span>
                            </div>
                            <div className="producto-botonzzz">
                                <button
                                    className="detalle-buttonzzz"
                                    onClick={() => handleMoreDetails(pedido.id)}
                                >
                                    Más Detalles
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <FooterComponent />
        </>
    );
};

export default MisPedidos;
