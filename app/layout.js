import './globals.css';

export const metadata = {
  title: 'Catorce Takeaway — Unidos por el sabor',
  description: 'Catorce Takeaway en San Nicolás — Café, pastelería y pedidos para llevar. Pedí por PedidosYa.',
};

export default function RootLayout({ children }){
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
