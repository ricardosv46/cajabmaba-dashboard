import { lazy } from 'react'
import { IconFile, IconUser } from '../icons'
// import IconCart from '../icons/IconCart'
// import IconConfig from '../icons/IconConfig'
import IconOptions from '../icons/IconOptions'
// import IconBank from '../icons/IconBank'
import { Route } from '../interfaces'

// import EditCategoryProduct from '../pages/home/products/categorys/EditCategoryProduct'
const Imagenes = lazy(() => import('../pages/home/imagenes/Imagenes'))
const Suscriptores = lazy(() => import('../pages/home/suscriptores/Suscriptores'))
const Pedidos = lazy(() => import('../pages/home/pedidos/Pedidos'))
const Abonado = lazy(() => import('../pages/home/abonado/Abonado'))
const EditarAbonado = lazy(() => import('../pages/home/abonado/EditarAbonado'))
const Eventos = lazy(() => import('../pages/home/eventos/Eventos'))
const CrearEvento = lazy(() => import('../pages/home/eventos/CrearEvento'))
const EditarEvento = lazy(() => import('../pages/home/eventos/EditarEvento'))
const Precios = lazy(() => import('../pages/home/precios/Precio'))
const PrecioButacas = lazy(() => import('../pages/home/precios/PrecioButacas'))
const PrecioReferencial = lazy(() => import('../pages/home/precios/PrecioReferencia'))
const DetallePedido = lazy(() => import('../pages/home/pedidos/DetallePedido'))
const ButacasPage = lazy(() => import('../pages/home/bloqueo/ButacasPage'))
const AbonoPage = lazy(() => import('../pages/home/bloqueo/abono/AbonoPage'))
const EventosPage = lazy(() => import('../pages/home/bloqueo/eventos/EventosPage'))
const VendedorasPage = lazy(() => import('../pages/home/vendedoras/VendedorasPage'))
const EditarVendedora = lazy(() => import('../pages/home/vendedoras/EditarVendedora'))
const CrearVendedora = lazy(() => import('../pages/home/vendedoras/CrearVendedora'))

const VentasPage = lazy(() => import('../pages/home/ventas/VentasPage'))
const DetalleVenta = lazy(() => import('../pages/home/ventas/DetalleVenta'))

export const homeRoutes: Route[] = [
	{
		icon: IconFile,
		name: 'Imagenes',
		path: 'imagenes',
		to: '/imagenes',
		component: Imagenes,
		subMenu: {
			value: false,
			paths: []
		}
	},
	{
		icon: IconFile,
		name: 'Suscriptores',
		path: 'suscriptores',
		to: '/suscriptores',
		component: Suscriptores,
		subMenu: {
			value: false,
			paths: []
		}
	},
	{
		icon: IconFile,
		path: 'pedidos',
		name: 'Pedidos',
		to: '/pedidos',
		component: Pedidos,
		subMenu: {
			value: false,
			paths: [
				{
					icon: IconFile,
					name: 'Detalle Pedido',
					path: 'detalle-pedido/:id',
					to: '/detalle-pedido',
					component: DetallePedido,
					render: false
				}
			]
		}
	},
	{
		icon: IconFile,
		name: 'Abonados',
		path: 'abonados',
		to: '/abonados',
		component: Abonado,
		subMenu: {
			value: false,
			paths: [
				{
					icon: IconFile,
					name: 'Editar-abonados',
					path: 'editar-abonados',
					to: '/editar-abonados/',
					component: EditarAbonado,
					render: false
				}
			]
		}
	},
	{
		icon: IconUser,
		name: 'Eventos',
		to: '/eventos',
		path: 'eventos',
		component: Eventos,
		subMenu: {
			value: false,
			paths: [
				{
					icon: IconUser,
					name: 'Crear-evento',
					to: '/crear-evento',
					path: 'crear-evento',
					render: false,
					component: CrearEvento
				},
				{
					icon: IconUser,
					name: 'Editar-evento',
					to: '/editar-evento',
					path: 'editar-evento/:id',
					render: false,
					component: EditarEvento
				}
			]
		}
	},
	{
		icon: IconFile,
		name: 'Bloqueo',
		to: '/bloqueo',
		path: 'bloqueo',
		component: ButacasPage,
		subMenu: {
			value: false,
			paths: [
				{
					icon: IconOptions,
					name: 'Abono',
					path: 'bloqueo/abono',
					to: 'abono',
					component: AbonoPage,
					render: false
				},

				{
					icon: IconFile,
					name: 'evento',
					path: 'bloqueo/evento/:id',
					to: 'evento',
					component: EventosPage,
					render: false
				}
			]
		}
	},
	{
		icon: IconUser,
		name: 'Vendedor',
		to: '/vendedora',
		path: 'vendedora',
		component: VendedorasPage,
		subMenu: {
			value: false,
			paths: [
				{
					icon: IconOptions,
					name: 'Abono',
					path: 'crear-vendedora',
					to: '/crear-vendedora',
					component: CrearVendedora,
					render: false
				},

				{
					icon: IconFile,
					name: 'evento',
					path: 'editar-vendedora/:id',
					to: '/editar-vendedora',
					component: EditarVendedora,
					render: false
				}
			]
		}
	},
	{
		icon: IconFile,
		name: 'Precios',
		to: '/precios',
		path: 'precios',
		component: Precios,
		subMenu: {
			value: true,
			paths: [
				{
					icon: IconOptions,
					name: 'Precio de Butacas',
					path: 'butaca',
					to: '/butaca',
					component: PrecioButacas,
					render: true
				},

				{
					icon: IconFile,
					name: 'Precio Referecial',
					path: 'referencial',
					to: '/referencial',
					component: PrecioReferencial,
					render: true
				}
			]
		}
	},
	{
		icon: IconFile,
		path: 'ventas',
		name: 'Ventas',
		to: '/ventas',
		component: VentasPage,
		subMenu: {
			value: false,
			paths: [
				{
					icon: IconFile,
					name: 'Abono',
					path: 'ventas/:id',
					to: '',
					component: DetalleVenta,
					render: false
				}
			]
		}
	}
]

export const getRoutes = () => {
	const subRoutes = []
	const mainRoutes = []

	for (const { subMenu, ...mainRoute } of homeRoutes) {
		mainRoutes.push(mainRoute)

		for (const subMenu_ of subMenu.paths) {
			subRoutes.push(subMenu_)
		}
	}

	return { mainRoutes, subRoutes }
}
