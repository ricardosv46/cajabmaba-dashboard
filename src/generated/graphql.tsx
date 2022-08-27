import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  DateTimeTz: any;
  Upload: any;
};

export type Asiento = {
  __typename?: 'Asiento';
  asiento?: Maybe<Scalars['String']>;
  asientoId?: Maybe<Scalars['ID']>;
  code?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['String']>;
  eventoId?: Maybe<Scalars['Int']>;
  feriaId?: Maybe<Scalars['Int']>;
  reservado?: Maybe<Scalars['String']>;
  tendido?: Maybe<Scalars['String']>;
};

export type AsignacionEntrada = {
  __typename?: 'AsignacionEntrada';
  apellidos?: Maybe<Scalars['String']>;
  asientoId?: Maybe<Scalars['ID']>;
  codigo?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  eventoId?: Maybe<Scalars['Int']>;
  fecha?: Maybe<Scalars['Date']>;
  hora?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  numDocumento?: Maybe<Scalars['String']>;
  reservado?: Maybe<Scalars['String']>;
  tendido?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type AsignacionEntradaInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  asientoId?: InputMaybe<Scalars['ID']>;
  nombres?: InputMaybe<Scalars['String']>;
  numDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type AsignacionEntradaVentaInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  asientoId?: InputMaybe<Scalars['ID']>;
  code?: InputMaybe<Scalars['String']>;
  nombres?: InputMaybe<Scalars['String']>;
  numDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type Asistente = {
  __typename?: 'Asistente';
  apellidos?: Maybe<Scalars['String']>;
  asiento?: Maybe<Scalars['String']>;
  asientoId?: Maybe<Scalars['ID']>;
  codigo?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  numDocumento?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
};

export type Bloque = {
  __typename?: 'Bloque';
  asiento?: Maybe<Scalars['String']>;
  bloqueId?: Maybe<Scalars['ID']>;
  codigo?: Maybe<Scalars['String']>;
  reservado?: Maybe<Scalars['String']>;
  tendido?: Maybe<Scalars['String']>;
};

export type BloqueoAsientoInput = {
  asiento?: InputMaybe<Scalars['String']>;
  codigo?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['Int']>;
  feriaId?: InputMaybe<Scalars['Int']>;
  reservado?: InputMaybe<Scalars['String']>;
  tendido?: InputMaybe<Scalars['String']>;
};

export type Butaca = {
  __typename?: 'Butaca';
  butacaId?: Maybe<Scalars['ID']>;
  cantidad?: Maybe<Scalars['Int']>;
  codigo?: Maybe<Scalars['String']>;
  precio?: Maybe<Scalars['Float']>;
  tendido?: Maybe<Scalars['String']>;
};

export type ButacaInput = {
  butacaId?: InputMaybe<Scalars['ID']>;
  precio?: InputMaybe<Scalars['Float']>;
};

export type DetallePedido = {
  __typename?: 'DetallePedido';
  asiento?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['String']>;
  detallePedidoId?: Maybe<Scalars['ID']>;
  eventoId?: Maybe<Scalars['Int']>;
  feriaId?: Maybe<Scalars['Int']>;
  pedidoId?: Maybe<Scalars['Int']>;
  precio?: Maybe<Scalars['Float']>;
  tendido?: Maybe<Scalars['String']>;
};

export type DetallePedidoInput = {
  asiento?: InputMaybe<Scalars['String']>;
  codigo?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['Int']>;
  feriaId?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Scalars['Float']>;
  reservado?: InputMaybe<Scalars['String']>;
  tendido?: InputMaybe<Scalars['String']>;
};

export type DetalleVenta = {
  __typename?: 'DetalleVenta';
  Evento?: Maybe<Evento>;
  asiento?: Maybe<Scalars['String']>;
  codigo?: Maybe<Scalars['String']>;
  detalleVentaId?: Maybe<Scalars['ID']>;
  eventoId?: Maybe<Scalars['Int']>;
  feriaId?: Maybe<Scalars['Int']>;
  precio?: Maybe<Scalars['Float']>;
  tendido?: Maybe<Scalars['String']>;
  ventaId?: Maybe<Scalars['Int']>;
};

export type DetalleVentaInput = {
  asiento?: InputMaybe<Scalars['String']>;
  codigo?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['Int']>;
  feriaId?: InputMaybe<Scalars['Int']>;
  precio?: InputMaybe<Scalars['Float']>;
  reservado?: InputMaybe<Scalars['String']>;
  tendido?: InputMaybe<Scalars['String']>;
};

export type Evento = {
  __typename?: 'Evento';
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionLarga?: Maybe<Scalars['String']>;
  direccion?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  eventoId?: Maybe<Scalars['ID']>;
  fecha?: Maybe<Scalars['Date']>;
  fechaFinal?: Maybe<Scalars['Date']>;
  fechaInicial?: Maybe<Scalars['Date']>;
  feriaId?: Maybe<Scalars['Int']>;
  hora?: Maybe<Scalars['String']>;
  horaFinal?: Maybe<Scalars['String']>;
  horaInicial?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  slug?: Maybe<Scalars['String']>;
  terminosCondiciones?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
  ubicacion?: Maybe<Scalars['String']>;
};

export type EventoInput = {
  descripcionCorta?: InputMaybe<Scalars['String']>;
  descripcionLarga?: InputMaybe<Scalars['String']>;
  direccion?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['ID']>;
  fecha?: InputMaybe<Scalars['Date']>;
  fechaFinal?: InputMaybe<Scalars['Date']>;
  fechaInicial?: InputMaybe<Scalars['Date']>;
  hora?: InputMaybe<Scalars['String']>;
  horaFinal?: InputMaybe<Scalars['String']>;
  horaInicial?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  terminosCondiciones?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
  ubicacion?: InputMaybe<Scalars['String']>;
};

export type Feria = {
  __typename?: 'Feria';
  descripcionCorta?: Maybe<Scalars['String']>;
  descripcionLarga?: Maybe<Scalars['String']>;
  descuento?: Maybe<Scalars['Int']>;
  fecha?: Maybe<Scalars['Date']>;
  fechaFinal?: Maybe<Scalars['Date']>;
  fechaInicial?: Maybe<Scalars['Date']>;
  feriaId?: Maybe<Scalars['ID']>;
  hora?: Maybe<Scalars['String']>;
  horaFinal?: Maybe<Scalars['String']>;
  horaInicial?: Maybe<Scalars['String']>;
  imagenPrincipal?: Maybe<Imagen>;
  imagenSecundaria?: Maybe<Imagen>;
  terminosCondiciones?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
};

export type FeriaInput = {
  descripcionCorta?: InputMaybe<Scalars['String']>;
  descripcionLarga?: InputMaybe<Scalars['String']>;
  descuento?: InputMaybe<Scalars['Int']>;
  fecha?: InputMaybe<Scalars['Date']>;
  fechaFinal?: InputMaybe<Scalars['Date']>;
  fechaInicial?: InputMaybe<Scalars['Date']>;
  feriaId?: InputMaybe<Scalars['ID']>;
  hora?: InputMaybe<Scalars['String']>;
  horaFinal?: InputMaybe<Scalars['String']>;
  horaInicial?: InputMaybe<Scalars['String']>;
  imagenPrincipal?: InputMaybe<Scalars['Int']>;
  imagenSecundaria?: InputMaybe<Scalars['Int']>;
  terminosCondiciones?: InputMaybe<Scalars['String']>;
  titulo?: InputMaybe<Scalars['String']>;
};

export type GetAllAsientos = {
  __typename?: 'GetAllAsientos';
  data?: Maybe<Array<Maybe<Asiento>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllButacas = {
  __typename?: 'GetAllButacas';
  data?: Maybe<Array<Maybe<Butaca>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllEventos = {
  __typename?: 'GetAllEventos';
  data?: Maybe<Array<Evento>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllImagenes = {
  __typename?: 'GetAllImagenes';
  data?: Maybe<Array<Imagen>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllPedidos = {
  __typename?: 'GetAllPedidos';
  data?: Maybe<Array<Pedido>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllSuscriptores = {
  __typename?: 'GetAllSuscriptores';
  data?: Maybe<Array<Maybe<Suscriptor>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllVendedoras = {
  __typename?: 'GetAllVendedoras';
  data?: Maybe<Array<Maybe<Vendedora>>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type GetAllVentas = {
  __typename?: 'GetAllVentas';
  data?: Maybe<Array<Venta>>;
  numeroTotal?: Maybe<Scalars['Int']>;
};

export type Imagen = {
  __typename?: 'Imagen';
  id?: Maybe<Scalars['ID']>;
  titulo?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  ConsultEmail?: Maybe<Scalars['String']>;
  CreateBloqueoAsiento?: Maybe<Scalars['String']>;
  CreateBloqueoAsientoAbono?: Maybe<Scalars['String']>;
  CreateEvento?: Maybe<Evento>;
  CreateImagen: Scalars['String'];
  CreatePedido: Pedido;
  CreatePedidoAbonado: Pedido;
  CreateSuscriptor?: Maybe<Suscriptor>;
  CreateUsuario: User;
  CreateVendedora?: Maybe<Vendedora>;
  CreateVenta: Venta;
  CreateVentaAbonado: Venta;
  DeleteEvento?: Maybe<Scalars['String']>;
  DeleteImagen: Scalars['String'];
  Login?: Maybe<User>;
  RecoverPassword?: Maybe<Scalars['String']>;
  RestartAsientos?: Maybe<Scalars['String']>;
  UpdateAsignacionEntrada?: Maybe<AsignacionEntrada>;
  UpdateAsignacionEntradaVenta?: Maybe<AsignacionEntrada>;
  UpdateAsistencia?: Maybe<Asistente>;
  UpdateEstadoEvento?: Maybe<Evento>;
  UpdateEstadoVendedora?: Maybe<Vendedora>;
  UpdateEvento?: Maybe<Evento>;
  UpdateFeria?: Maybe<Feria>;
  UpdateImagen: Imagen;
  UpdatePassword: User;
  UpdatePrecio: Butaca;
  UpdatePrecioReferencial?: Maybe<Referencial>;
  UpdateUsuario: User;
  UpdateVendedora?: Maybe<Vendedora>;
  ValidacionEntrada?: Maybe<Asistente>;
};


export type MutationConsultEmailArgs = {
  email: Scalars['String'];
};


export type MutationCreateBloqueoAsientoArgs = {
  input?: InputMaybe<Array<BloqueoAsientoInput>>;
};


export type MutationCreateBloqueoAsientoAbonoArgs = {
  input?: InputMaybe<Array<BloqueoAsientoInput>>;
};


export type MutationCreateEventoArgs = {
  input: EventoInput;
};


export type MutationCreateImagenArgs = {
  imagen: Scalars['Upload'];
};


export type MutationCreatePedidoArgs = {
  input1: PedidoInput;
  input2?: InputMaybe<Array<DetallePedidoInput>>;
  input3?: InputMaybe<UserInput>;
};


export type MutationCreatePedidoAbonadoArgs = {
  input1: PedidoInput;
  input2?: InputMaybe<Array<DetallePedidoInput>>;
  input3?: InputMaybe<UserInput>;
};


export type MutationCreateSuscriptorArgs = {
  input: SuscriptorInput;
};


export type MutationCreateUsuarioArgs = {
  input: UserInput;
};


export type MutationCreateVendedoraArgs = {
  input: VendedoraInput;
};


export type MutationCreateVentaArgs = {
  input1: VentaInput;
  input2?: InputMaybe<Array<DetalleVentaInput>>;
};


export type MutationCreateVentaAbonadoArgs = {
  input1: VentaInput;
  input2?: InputMaybe<Array<DetalleVentaInput>>;
};


export type MutationDeleteEventoArgs = {
  eventoId: Scalars['Int'];
};


export type MutationDeleteImagenArgs = {
  id: Scalars['Int'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRecoverPasswordArgs = {
  email?: InputMaybe<Scalars['String']>;
};


export type MutationRestartAsientosArgs = {
  feriaId: Scalars['Int'];
};


export type MutationUpdateAsignacionEntradaArgs = {
  input: AsignacionEntradaInput;
};


export type MutationUpdateAsignacionEntradaVentaArgs = {
  input: AsignacionEntradaVentaInput;
};


export type MutationUpdateAsistenciaArgs = {
  input: UpdateAsistenciaInput;
};


export type MutationUpdateEstadoEventoArgs = {
  input: UpdateEstadoEventoInput;
};


export type MutationUpdateEstadoVendedoraArgs = {
  input: UpdateEstadoVendedoraInput;
};


export type MutationUpdateEventoArgs = {
  input: EventoInput;
};


export type MutationUpdateFeriaArgs = {
  input: FeriaInput;
};


export type MutationUpdateImagenArgs = {
  id?: InputMaybe<Scalars['Int']>;
  titulo?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePasswordArgs = {
  input?: InputMaybe<UpdatePasswordInput>;
};


export type MutationUpdatePrecioArgs = {
  input?: InputMaybe<ButacaInput>;
};


export type MutationUpdatePrecioReferencialArgs = {
  input: ReferencialInput;
};


export type MutationUpdateUsuarioArgs = {
  input?: InputMaybe<UserInput>;
};


export type MutationUpdateVendedoraArgs = {
  input: VendedoraInput;
};


export type MutationValidacionEntradaArgs = {
  constante?: InputMaybe<Scalars['String']>;
  fecha?: InputMaybe<Scalars['Date']>;
  numDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  field: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Pagination information about the corresponding list of items. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Count of nodes in current request. */
  count?: Maybe<Scalars['Int']>;
  /** Current page of request. */
  currentPage?: Maybe<Scalars['Int']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** Last page in connection. */
  lastPage?: Maybe<Scalars['Int']>;
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** Total number of node in connection. */
  total?: Maybe<Scalars['Int']>;
};

/** Pagination information about the corresponding list of items. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Total count of available items in the page. */
  count: Scalars['Int'];
  /** Current pagination page. */
  currentPage: Scalars['Int'];
  /** Index of first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** If collection has more pages. */
  hasMorePages: Scalars['Boolean'];
  /** Index of last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Last page number of the collection. */
  lastPage: Scalars['Int'];
  /** Number of items per page in the collection. */
  perPage: Scalars['Int'];
  /** Total items available in the collection. */
  total: Scalars['Int'];
};

export type Pedido = {
  __typename?: 'Pedido';
  DetallePedido?: Maybe<Array<DetallePedido>>;
  Usuario?: Maybe<User>;
  fechaPedido?: Maybe<Scalars['Date']>;
  numeroComprobante?: Maybe<Scalars['String']>;
  pedidoId?: Maybe<Scalars['ID']>;
  precioTotal?: Maybe<Scalars['Float']>;
  razonSocial?: Maybe<Scalars['String']>;
  tipoComprobante?: Maybe<Scalars['String']>;
  transaccionId?: Maybe<Scalars['Float']>;
  usuarioId?: Maybe<Scalars['Int']>;
};

export type PedidoInput = {
  fechaPedido?: InputMaybe<Scalars['Date']>;
  numeroComprobante?: InputMaybe<Scalars['String']>;
  pedidoId?: InputMaybe<Scalars['ID']>;
  precioTotal?: InputMaybe<Scalars['Float']>;
  razonSocial?: InputMaybe<Scalars['String']>;
  tipoComprobante?: InputMaybe<Scalars['String']>;
  transaccionId?: InputMaybe<Scalars['Float']>;
};

export type Query = {
  __typename?: 'Query';
  GetAllAsientos?: Maybe<Array<Maybe<Asiento>>>;
  GetAllAsientosAbonados?: Maybe<Array<Maybe<Asiento>>>;
  GetAllBloques?: Maybe<Array<Maybe<Bloque>>>;
  GetAllButacas?: Maybe<GetAllButacas>;
  GetAllEntradasUsuario?: Maybe<Array<Maybe<AsignacionEntrada>>>;
  GetAllEventos?: Maybe<GetAllEventos>;
  GetAllEventosUsuario?: Maybe<GetAllEventos>;
  GetAllImagenes?: Maybe<GetAllImagenes>;
  GetAllPedidos?: Maybe<GetAllPedidos>;
  GetAllPrecioReferencial?: Maybe<Array<Maybe<Referencial>>>;
  GetAllSuscriptores?: Maybe<GetAllSuscriptores>;
  GetAllVendedoras?: Maybe<GetAllVendedoras>;
  GetAllVentas?: Maybe<GetAllVentas>;
  GetEventoSlug?: Maybe<Evento>;
  GetFeria?: Maybe<Feria>;
  GetPedidoId?: Maybe<Pedido>;
  GetReporteExcel?: Maybe<Scalars['String']>;
  GetVentaId?: Maybe<Venta>;
};


export type QueryGetAllAsientosArgs = {
  eventoId?: InputMaybe<Scalars['Int']>;
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllAsientosAbonadosArgs = {
  feriaId?: InputMaybe<Scalars['Int']>;
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllBloquesArgs = {
  feriaId?: InputMaybe<Scalars['Int']>;
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllButacasArgs = {
  tendido?: InputMaybe<Scalars['String']>;
};


export type QueryGetAllEntradasUsuarioArgs = {
  eventoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllEventosArgs = {
  estado?: InputMaybe<Scalars['String']>;
  feriaId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllImagenesArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllPedidosArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllSuscriptoresArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllVendedorasArgs = {
  estado?: InputMaybe<Scalars['String']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllVentasArgs = {
  numeroPagina?: InputMaybe<Scalars['Int']>;
  pagina?: InputMaybe<Scalars['Int']>;
};


export type QueryGetEventoSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGetPedidoIdArgs = {
  pedidoId?: InputMaybe<Scalars['Int']>;
};


export type QueryGetReporteExcelArgs = {
  pedidoId: Scalars['Int'];
};


export type QueryGetVentaIdArgs = {
  ventaId?: InputMaybe<Scalars['Int']>;
};

export type Referencial = {
  __typename?: 'Referencial';
  precio?: Maybe<Scalars['Float']>;
  referenciaId?: Maybe<Scalars['ID']>;
  tendido?: Maybe<Scalars['String']>;
  titulo?: Maybe<Scalars['String']>;
};

export type ReferencialInput = {
  precio?: InputMaybe<Scalars['Float']>;
  referenciaId?: InputMaybe<Scalars['ID']>;
};

/** The available directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type Suscriptor = {
  __typename?: 'Suscriptor';
  email?: Maybe<Scalars['String']>;
  nombres?: Maybe<Scalars['String']>;
  suscriptorId?: Maybe<Scalars['ID']>;
};

export type SuscriptorInput = {
  email?: InputMaybe<Scalars['String']>;
  nombres?: InputMaybe<Scalars['String']>;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type UpdateAsistenciaInput = {
  asientoId?: InputMaybe<Scalars['ID']>;
  constante?: InputMaybe<Scalars['String']>;
  numDocumento?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type UpdateEstadoEventoInput = {
  estado?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['ID']>;
};

export type UpdateEstadoVendedoraInput = {
  estado?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
};

export type UpdatePasswordInput = {
  passwordAntiguo?: InputMaybe<Scalars['String']>;
  passwordNuevo?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  apellidos?: Maybe<Scalars['String']>;
  apiToken?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  nombres?: Maybe<Scalars['String']>;
  numeroDocumento?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
  tipoUsuario?: Maybe<Scalars['Int']>;
};

export type UserInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  nombres?: InputMaybe<Scalars['String']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type Vendedora = {
  __typename?: 'Vendedora';
  apellidos?: Maybe<Scalars['String']>;
  celular?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  estado?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  nombres?: Maybe<Scalars['String']>;
  numeroDocumento?: Maybe<Scalars['String']>;
  tipoDocumento?: Maybe<Scalars['String']>;
};

export type VendedoraInput = {
  apellidos?: InputMaybe<Scalars['String']>;
  celular?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  nombres?: InputMaybe<Scalars['String']>;
  numeroDocumento?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  tipoDocumento?: InputMaybe<Scalars['String']>;
};

export type Venta = {
  __typename?: 'Venta';
  DetalleVenta?: Maybe<Array<DetalleVenta>>;
  Usuario?: Maybe<User>;
  celular?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fechaVenta?: Maybe<Scalars['Date']>;
  numeroComprobante?: Maybe<Scalars['String']>;
  precioTotal?: Maybe<Scalars['Float']>;
  razonSocial?: Maybe<Scalars['String']>;
  tipoComprobante?: Maybe<Scalars['String']>;
  tipoVenta?: Maybe<Scalars['String']>;
  usuarioId?: Maybe<Scalars['Int']>;
  ventaId?: Maybe<Scalars['ID']>;
};

export type VentaInput = {
  celular?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  fechaVenta?: InputMaybe<Scalars['Date']>;
  numeroComprobante?: InputMaybe<Scalars['String']>;
  precioTotal?: InputMaybe<Scalars['Float']>;
  razonSocial?: InputMaybe<Scalars['String']>;
  tipoComprobante?: InputMaybe<Scalars['String']>;
  tipoVenta?: InputMaybe<Scalars['String']>;
  transaccionId?: InputMaybe<Scalars['Float']>;
  ventaId?: InputMaybe<Scalars['ID']>;
};

export type CreateBloqueoAsientoMutationVariables = Exact<{
  input?: InputMaybe<Array<BloqueoAsientoInput> | BloqueoAsientoInput>;
}>;


export type CreateBloqueoAsientoMutation = { __typename?: 'Mutation', CreateBloqueoAsiento?: string | null };

export type CreateBloqueoAsientoAbonoMutationVariables = Exact<{
  input?: InputMaybe<Array<BloqueoAsientoInput> | BloqueoAsientoInput>;
}>;


export type CreateBloqueoAsientoAbonoMutation = { __typename?: 'Mutation', CreateBloqueoAsientoAbono?: string | null };

export type CreateEventoMutationVariables = Exact<{
  input: EventoInput;
}>;


export type CreateEventoMutation = { __typename?: 'Mutation', CreateEvento?: { __typename?: 'Evento', eventoId?: string | null, slug?: string | null, titulo?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, terminosCondiciones?: string | null, direccion?: string | null, ubicacion?: string | null, fecha?: any | null, hora?: string | null, fechaInicial?: any | null, horaInicial?: string | null, fechaFinal?: any | null, horaFinal?: string | null, estado?: string | null, feriaId?: number | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null } | null };

export type CreateImagenMutationVariables = Exact<{
  imagen: Scalars['Upload'];
}>;


export type CreateImagenMutation = { __typename?: 'Mutation', CreateImagen: string };

export type CreateVendedoraMutationVariables = Exact<{
  input: VendedoraInput;
}>;


export type CreateVendedoraMutation = { __typename?: 'Mutation', CreateVendedora?: { __typename?: 'Vendedora', id?: string | null, nombres?: string | null, estado?: string | null } | null };

export type DeleteEventoMutationVariables = Exact<{
  eventoId: Scalars['Int'];
}>;


export type DeleteEventoMutation = { __typename?: 'Mutation', DeleteEvento?: string | null };

export type DeleteImagenMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteImagenMutation = { __typename?: 'Mutation', DeleteImagen: string };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', Login?: { __typename?: 'User', id?: string | null, email?: string | null, tipoUsuario?: number | null, tipoDocumento?: string | null, numeroDocumento?: string | null, nombres?: string | null, apellidos?: string | null, celular?: string | null, apiToken?: string | null } | null };

export type RestartAsientosMutationVariables = Exact<{
  feriaId: Scalars['Int'];
}>;


export type RestartAsientosMutation = { __typename?: 'Mutation', RestartAsientos?: string | null };

export type UpdateEstadoEventoMutationVariables = Exact<{
  input: UpdateEstadoEventoInput;
}>;


export type UpdateEstadoEventoMutation = { __typename?: 'Mutation', UpdateEstadoEvento?: { __typename?: 'Evento', eventoId?: string | null, slug?: string | null, titulo?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, terminosCondiciones?: string | null, direccion?: string | null, ubicacion?: string | null, fecha?: any | null, hora?: string | null, fechaInicial?: any | null, horaInicial?: string | null, fechaFinal?: any | null, estado?: string | null, feriaId?: number | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null } | null };

export type UpdateEstadoVendedoraMutationVariables = Exact<{
  input: UpdateEstadoVendedoraInput;
}>;


export type UpdateEstadoVendedoraMutation = { __typename?: 'Mutation', UpdateEstadoVendedora?: { __typename?: 'Vendedora', id?: string | null, estado?: string | null } | null };

export type UpdateEventoMutationVariables = Exact<{
  input: EventoInput;
}>;


export type UpdateEventoMutation = { __typename?: 'Mutation', UpdateEvento?: { __typename?: 'Evento', eventoId?: string | null, slug?: string | null, titulo?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, terminosCondiciones?: string | null, direccion?: string | null, ubicacion?: string | null, fecha?: any | null, hora?: string | null, fechaInicial?: any | null, horaInicial?: string | null, fechaFinal?: any | null, horaFinal?: string | null, estado?: string | null, feriaId?: number | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null } | null };

export type UpdateFeriaMutationVariables = Exact<{
  input: FeriaInput;
}>;


export type UpdateFeriaMutation = { __typename?: 'Mutation', UpdateFeria?: { __typename?: 'Feria', feriaId?: string | null, titulo?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, terminosCondiciones?: string | null, fecha?: any | null, hora?: string | null, fechaInicial?: any | null, horaInicial?: string | null, fechaFinal?: any | null, horaFinal?: string | null, descuento?: number | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null } | null };

export type UpdatePasswordMutationVariables = Exact<{
  input?: InputMaybe<UpdatePasswordInput>;
}>;


export type UpdatePasswordMutation = { __typename?: 'Mutation', UpdatePassword: { __typename?: 'User', nombres?: string | null, apellidos?: string | null, apiToken?: string | null } };

export type UpdatePrecioMutationVariables = Exact<{
  input?: InputMaybe<ButacaInput>;
}>;


export type UpdatePrecioMutation = { __typename?: 'Mutation', UpdatePrecio: { __typename?: 'Butaca', butacaId?: string | null, tendido?: string | null, codigo?: string | null, cantidad?: number | null, precio?: number | null } };

export type UpdatePrecioReferencialMutationVariables = Exact<{
  input: ReferencialInput;
}>;


export type UpdatePrecioReferencialMutation = { __typename?: 'Mutation', UpdatePrecioReferencial?: { __typename?: 'Referencial', referenciaId?: string | null, tendido?: string | null, titulo?: string | null, precio?: number | null } | null };

export type UpdateVendedoraMutationVariables = Exact<{
  input: VendedoraInput;
}>;


export type UpdateVendedoraMutation = { __typename?: 'Mutation', UpdateVendedora?: { __typename?: 'Vendedora', id?: string | null, nombres?: string | null, estado?: string | null } | null };

export type GetAllAsientosQueryVariables = Exact<{
  tendido?: InputMaybe<Scalars['String']>;
  eventoId?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllAsientosQuery = { __typename?: 'Query', GetAllAsientos?: Array<{ __typename?: 'Asiento', asientoId?: string | null, tendido?: string | null, codigo?: string | null, asiento?: string | null, reservado?: string | null } | null> | null };

export type GetAllAsientosAbonadosQueryVariables = Exact<{
  tendido?: InputMaybe<Scalars['String']>;
  feriaId?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllAsientosAbonadosQuery = { __typename?: 'Query', GetAllAsientosAbonados?: Array<{ __typename?: 'Asiento', asientoId?: string | null, tendido?: string | null, codigo?: string | null, reservado?: string | null, asiento?: string | null, feriaId?: number | null } | null> | null };

export type GetAllBloquesQueryVariables = Exact<{
  tendido?: InputMaybe<Scalars['String']>;
  feriaId?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllBloquesQuery = { __typename?: 'Query', GetAllBloques?: Array<{ __typename?: 'Bloque', bloqueId?: string | null, tendido?: string | null, asiento?: string | null, codigo?: string | null, reservado?: string | null } | null> | null };

export type GetAllButacasQueryVariables = Exact<{
  tendido?: InputMaybe<Scalars['String']>;
}>;


export type GetAllButacasQuery = { __typename?: 'Query', GetAllButacas?: { __typename?: 'GetAllButacas', numeroTotal?: number | null, data?: Array<{ __typename?: 'Butaca', butacaId?: string | null, tendido?: string | null, codigo?: string | null, cantidad?: number | null, precio?: number | null } | null> | null } | null };

export type GetAllEventosQueryVariables = Exact<{
  feriaId?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllEventosQuery = { __typename?: 'Query', GetAllEventos?: { __typename?: 'GetAllEventos', numeroTotal?: number | null, data?: Array<{ __typename?: 'Evento', eventoId?: string | null, slug?: string | null, titulo?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, terminosCondiciones?: string | null, direccion?: string | null, ubicacion?: string | null, fecha?: any | null, hora?: string | null, fechaInicial?: any | null, horaInicial?: string | null, fechaFinal?: any | null, horaFinal?: string | null, estado?: string | null, feriaId?: number | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null }> | null } | null };

export type GetAllImagenesQueryVariables = Exact<{
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllImagenesQuery = { __typename?: 'Query', GetAllImagenes?: { __typename?: 'GetAllImagenes', numeroTotal?: number | null, data?: Array<{ __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null }> | null } | null };

export type GetAllPedidosQueryVariables = Exact<{
  pagina: Scalars['Int'];
  numeroPagina: Scalars['Int'];
}>;


export type GetAllPedidosQuery = { __typename?: 'Query', GetAllPedidos?: { __typename?: 'GetAllPedidos', numeroTotal?: number | null, data?: Array<{ __typename?: 'Pedido', pedidoId?: string | null, tipoComprobante?: string | null, numeroComprobante?: string | null, razonSocial?: string | null, precioTotal?: number | null, fechaPedido?: any | null, usuarioId?: number | null, Usuario?: { __typename?: 'User', id?: string | null, tipoUsuario?: number | null, tipoDocumento?: string | null, numeroDocumento?: string | null, nombres?: string | null, apellidos?: string | null, celular?: string | null, email?: string | null, apiToken?: string | null } | null, DetallePedido?: Array<{ __typename?: 'DetallePedido', detallePedidoId?: string | null, tendido?: string | null, codigo?: string | null, asiento?: string | null, precio?: number | null, eventoId?: number | null, feriaId?: number | null, pedidoId?: number | null }> | null }> | null } | null };

export type GetAllPrecioReferencialQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPrecioReferencialQuery = { __typename?: 'Query', GetAllPrecioReferencial?: Array<{ __typename?: 'Referencial', tendido?: string | null, precio?: number | null, titulo?: string | null, referenciaId?: string | null } | null> | null };

export type GetAllSuscriptoresQueryVariables = Exact<{
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllSuscriptoresQuery = { __typename?: 'Query', GetAllSuscriptores?: { __typename?: 'GetAllSuscriptores', numeroTotal?: number | null, data?: Array<{ __typename?: 'Suscriptor', suscriptorId?: string | null, nombres?: string | null, email?: string | null } | null> | null } | null };

export type GetAllVendedorasQueryVariables = Exact<{
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
  estado?: InputMaybe<Scalars['String']>;
}>;


export type GetAllVendedorasQuery = { __typename?: 'Query', GetAllVendedoras?: { __typename?: 'GetAllVendedoras', numeroTotal?: number | null, data?: Array<{ __typename?: 'Vendedora', id?: string | null, tipoDocumento?: string | null, numeroDocumento?: string | null, nombres?: string | null, apellidos?: string | null, celular?: string | null, email?: string | null, estado?: string | null } | null> | null } | null };

export type GetAllVentasQueryVariables = Exact<{
  pagina?: InputMaybe<Scalars['Int']>;
  numeroPagina?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllVentasQuery = { __typename?: 'Query', GetAllVentas?: { __typename?: 'GetAllVentas', numeroTotal?: number | null, data?: Array<{ __typename?: 'Venta', ventaId?: string | null, tipoComprobante?: string | null, numeroComprobante?: string | null, razonSocial?: string | null, celular?: string | null, tipoVenta?: string | null, email?: string | null, precioTotal?: number | null, fechaVenta?: any | null, DetalleVenta?: Array<{ __typename?: 'DetalleVenta', detalleVentaId?: string | null, tendido?: string | null, codigo?: string | null, asiento?: string | null, precio?: number | null, eventoId?: number | null, feriaId?: number | null, ventaId?: number | null }> | null }> | null } | null };

export type GetFeriaQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeriaQuery = { __typename?: 'Query', GetFeria?: { __typename?: 'Feria', feriaId?: string | null, titulo?: string | null, descripcionCorta?: string | null, descripcionLarga?: string | null, terminosCondiciones?: string | null, fecha?: any | null, hora?: string | null, fechaInicial?: any | null, horaInicial?: string | null, fechaFinal?: any | null, horaFinal?: string | null, descuento?: number | null, imagenPrincipal?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null, imagenSecundaria?: { __typename?: 'Imagen', id?: string | null, titulo?: string | null, url?: string | null } | null } | null };

export type GetReporteExcelQueryVariables = Exact<{
  pedidoId: Scalars['Int'];
}>;


export type GetReporteExcelQuery = { __typename?: 'Query', GetReporteExcel?: string | null };

export type GetVentaIdQueryVariables = Exact<{
  ventaId?: InputMaybe<Scalars['Int']>;
}>;


export type GetVentaIdQuery = { __typename?: 'Query', GetVentaId?: { __typename?: 'Venta', ventaId?: string | null, tipoComprobante?: string | null, razonSocial?: string | null, celular?: string | null, precioTotal?: number | null, fechaVenta?: any | null, usuarioId?: number | null, DetalleVenta?: Array<{ __typename?: 'DetalleVenta', detalleVentaId?: string | null, tendido?: string | null, codigo?: string | null, asiento?: string | null, precio?: number | null, feriaId?: number | null, eventoId?: number | null, Evento?: { __typename?: 'Evento', titulo?: string | null } | null }> | null } | null };


export const CreateBloqueoAsientoDocument = gql`
    mutation CreateBloqueoAsiento($input: [BloqueoAsientoInput!]) {
  CreateBloqueoAsiento(input: $input)
}
    `;
export type CreateBloqueoAsientoMutationFn = Apollo.MutationFunction<CreateBloqueoAsientoMutation, CreateBloqueoAsientoMutationVariables>;

/**
 * __useCreateBloqueoAsientoMutation__
 *
 * To run a mutation, you first call `useCreateBloqueoAsientoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBloqueoAsientoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBloqueoAsientoMutation, { data, loading, error }] = useCreateBloqueoAsientoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBloqueoAsientoMutation(baseOptions?: Apollo.MutationHookOptions<CreateBloqueoAsientoMutation, CreateBloqueoAsientoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBloqueoAsientoMutation, CreateBloqueoAsientoMutationVariables>(CreateBloqueoAsientoDocument, options);
      }
export type CreateBloqueoAsientoMutationHookResult = ReturnType<typeof useCreateBloqueoAsientoMutation>;
export type CreateBloqueoAsientoMutationResult = Apollo.MutationResult<CreateBloqueoAsientoMutation>;
export type CreateBloqueoAsientoMutationOptions = Apollo.BaseMutationOptions<CreateBloqueoAsientoMutation, CreateBloqueoAsientoMutationVariables>;
export const CreateBloqueoAsientoAbonoDocument = gql`
    mutation CreateBloqueoAsientoAbono($input: [BloqueoAsientoInput!]) {
  CreateBloqueoAsientoAbono(input: $input)
}
    `;
export type CreateBloqueoAsientoAbonoMutationFn = Apollo.MutationFunction<CreateBloqueoAsientoAbonoMutation, CreateBloqueoAsientoAbonoMutationVariables>;

/**
 * __useCreateBloqueoAsientoAbonoMutation__
 *
 * To run a mutation, you first call `useCreateBloqueoAsientoAbonoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBloqueoAsientoAbonoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBloqueoAsientoAbonoMutation, { data, loading, error }] = useCreateBloqueoAsientoAbonoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBloqueoAsientoAbonoMutation(baseOptions?: Apollo.MutationHookOptions<CreateBloqueoAsientoAbonoMutation, CreateBloqueoAsientoAbonoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBloqueoAsientoAbonoMutation, CreateBloqueoAsientoAbonoMutationVariables>(CreateBloqueoAsientoAbonoDocument, options);
      }
export type CreateBloqueoAsientoAbonoMutationHookResult = ReturnType<typeof useCreateBloqueoAsientoAbonoMutation>;
export type CreateBloqueoAsientoAbonoMutationResult = Apollo.MutationResult<CreateBloqueoAsientoAbonoMutation>;
export type CreateBloqueoAsientoAbonoMutationOptions = Apollo.BaseMutationOptions<CreateBloqueoAsientoAbonoMutation, CreateBloqueoAsientoAbonoMutationVariables>;
export const CreateEventoDocument = gql`
    mutation CreateEvento($input: EventoInput!) {
  CreateEvento(input: $input) {
    eventoId
    slug
    titulo
    descripcionCorta
    descripcionLarga
    terminosCondiciones
    direccion
    ubicacion
    fecha
    hora
    imagenPrincipal {
      id
      titulo
      url
    }
    fechaInicial
    horaInicial
    fechaFinal
    horaFinal
    estado
    feriaId
  }
}
    `;
export type CreateEventoMutationFn = Apollo.MutationFunction<CreateEventoMutation, CreateEventoMutationVariables>;

/**
 * __useCreateEventoMutation__
 *
 * To run a mutation, you first call `useCreateEventoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventoMutation, { data, loading, error }] = useCreateEventoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateEventoMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventoMutation, CreateEventoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventoMutation, CreateEventoMutationVariables>(CreateEventoDocument, options);
      }
export type CreateEventoMutationHookResult = ReturnType<typeof useCreateEventoMutation>;
export type CreateEventoMutationResult = Apollo.MutationResult<CreateEventoMutation>;
export type CreateEventoMutationOptions = Apollo.BaseMutationOptions<CreateEventoMutation, CreateEventoMutationVariables>;
export const CreateImagenDocument = gql`
    mutation CreateImagen($imagen: Upload!) {
  CreateImagen(imagen: $imagen)
}
    `;
export type CreateImagenMutationFn = Apollo.MutationFunction<CreateImagenMutation, CreateImagenMutationVariables>;

/**
 * __useCreateImagenMutation__
 *
 * To run a mutation, you first call `useCreateImagenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateImagenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createImagenMutation, { data, loading, error }] = useCreateImagenMutation({
 *   variables: {
 *      imagen: // value for 'imagen'
 *   },
 * });
 */
export function useCreateImagenMutation(baseOptions?: Apollo.MutationHookOptions<CreateImagenMutation, CreateImagenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateImagenMutation, CreateImagenMutationVariables>(CreateImagenDocument, options);
      }
export type CreateImagenMutationHookResult = ReturnType<typeof useCreateImagenMutation>;
export type CreateImagenMutationResult = Apollo.MutationResult<CreateImagenMutation>;
export type CreateImagenMutationOptions = Apollo.BaseMutationOptions<CreateImagenMutation, CreateImagenMutationVariables>;
export const CreateVendedoraDocument = gql`
    mutation CreateVendedora($input: VendedoraInput!) {
  CreateVendedora(input: $input) {
    id
    nombres
    estado
  }
}
    `;
export type CreateVendedoraMutationFn = Apollo.MutationFunction<CreateVendedoraMutation, CreateVendedoraMutationVariables>;

/**
 * __useCreateVendedoraMutation__
 *
 * To run a mutation, you first call `useCreateVendedoraMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVendedoraMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVendedoraMutation, { data, loading, error }] = useCreateVendedoraMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateVendedoraMutation(baseOptions?: Apollo.MutationHookOptions<CreateVendedoraMutation, CreateVendedoraMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVendedoraMutation, CreateVendedoraMutationVariables>(CreateVendedoraDocument, options);
      }
export type CreateVendedoraMutationHookResult = ReturnType<typeof useCreateVendedoraMutation>;
export type CreateVendedoraMutationResult = Apollo.MutationResult<CreateVendedoraMutation>;
export type CreateVendedoraMutationOptions = Apollo.BaseMutationOptions<CreateVendedoraMutation, CreateVendedoraMutationVariables>;
export const DeleteEventoDocument = gql`
    mutation DeleteEvento($eventoId: Int!) {
  DeleteEvento(eventoId: $eventoId)
}
    `;
export type DeleteEventoMutationFn = Apollo.MutationFunction<DeleteEventoMutation, DeleteEventoMutationVariables>;

/**
 * __useDeleteEventoMutation__
 *
 * To run a mutation, you first call `useDeleteEventoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventoMutation, { data, loading, error }] = useDeleteEventoMutation({
 *   variables: {
 *      eventoId: // value for 'eventoId'
 *   },
 * });
 */
export function useDeleteEventoMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEventoMutation, DeleteEventoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEventoMutation, DeleteEventoMutationVariables>(DeleteEventoDocument, options);
      }
export type DeleteEventoMutationHookResult = ReturnType<typeof useDeleteEventoMutation>;
export type DeleteEventoMutationResult = Apollo.MutationResult<DeleteEventoMutation>;
export type DeleteEventoMutationOptions = Apollo.BaseMutationOptions<DeleteEventoMutation, DeleteEventoMutationVariables>;
export const DeleteImagenDocument = gql`
    mutation DeleteImagen($id: Int!) {
  DeleteImagen(id: $id)
}
    `;
export type DeleteImagenMutationFn = Apollo.MutationFunction<DeleteImagenMutation, DeleteImagenMutationVariables>;

/**
 * __useDeleteImagenMutation__
 *
 * To run a mutation, you first call `useDeleteImagenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteImagenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteImagenMutation, { data, loading, error }] = useDeleteImagenMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteImagenMutation(baseOptions?: Apollo.MutationHookOptions<DeleteImagenMutation, DeleteImagenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteImagenMutation, DeleteImagenMutationVariables>(DeleteImagenDocument, options);
      }
export type DeleteImagenMutationHookResult = ReturnType<typeof useDeleteImagenMutation>;
export type DeleteImagenMutationResult = Apollo.MutationResult<DeleteImagenMutation>;
export type DeleteImagenMutationOptions = Apollo.BaseMutationOptions<DeleteImagenMutation, DeleteImagenMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  Login(input: $input) {
    id
    email
    tipoUsuario
    tipoDocumento
    numeroDocumento
    nombres
    apellidos
    celular
    apiToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RestartAsientosDocument = gql`
    mutation RestartAsientos($feriaId: Int!) {
  RestartAsientos(feriaId: $feriaId)
}
    `;
export type RestartAsientosMutationFn = Apollo.MutationFunction<RestartAsientosMutation, RestartAsientosMutationVariables>;

/**
 * __useRestartAsientosMutation__
 *
 * To run a mutation, you first call `useRestartAsientosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRestartAsientosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [restartAsientosMutation, { data, loading, error }] = useRestartAsientosMutation({
 *   variables: {
 *      feriaId: // value for 'feriaId'
 *   },
 * });
 */
export function useRestartAsientosMutation(baseOptions?: Apollo.MutationHookOptions<RestartAsientosMutation, RestartAsientosMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RestartAsientosMutation, RestartAsientosMutationVariables>(RestartAsientosDocument, options);
      }
export type RestartAsientosMutationHookResult = ReturnType<typeof useRestartAsientosMutation>;
export type RestartAsientosMutationResult = Apollo.MutationResult<RestartAsientosMutation>;
export type RestartAsientosMutationOptions = Apollo.BaseMutationOptions<RestartAsientosMutation, RestartAsientosMutationVariables>;
export const UpdateEstadoEventoDocument = gql`
    mutation UpdateEstadoEvento($input: UpdateEstadoEventoInput!) {
  UpdateEstadoEvento(input: $input) {
    eventoId
    slug
    titulo
    descripcionCorta
    descripcionLarga
    terminosCondiciones
    direccion
    ubicacion
    fecha
    hora
    imagenPrincipal {
      id
      titulo
      url
    }
    fechaInicial
    horaInicial
    fechaFinal
    estado
    feriaId
  }
}
    `;
export type UpdateEstadoEventoMutationFn = Apollo.MutationFunction<UpdateEstadoEventoMutation, UpdateEstadoEventoMutationVariables>;

/**
 * __useUpdateEstadoEventoMutation__
 *
 * To run a mutation, you first call `useUpdateEstadoEventoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstadoEventoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstadoEventoMutation, { data, loading, error }] = useUpdateEstadoEventoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEstadoEventoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEstadoEventoMutation, UpdateEstadoEventoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEstadoEventoMutation, UpdateEstadoEventoMutationVariables>(UpdateEstadoEventoDocument, options);
      }
export type UpdateEstadoEventoMutationHookResult = ReturnType<typeof useUpdateEstadoEventoMutation>;
export type UpdateEstadoEventoMutationResult = Apollo.MutationResult<UpdateEstadoEventoMutation>;
export type UpdateEstadoEventoMutationOptions = Apollo.BaseMutationOptions<UpdateEstadoEventoMutation, UpdateEstadoEventoMutationVariables>;
export const UpdateEstadoVendedoraDocument = gql`
    mutation UpdateEstadoVendedora($input: UpdateEstadoVendedoraInput!) {
  UpdateEstadoVendedora(input: $input) {
    id
    estado
  }
}
    `;
export type UpdateEstadoVendedoraMutationFn = Apollo.MutationFunction<UpdateEstadoVendedoraMutation, UpdateEstadoVendedoraMutationVariables>;

/**
 * __useUpdateEstadoVendedoraMutation__
 *
 * To run a mutation, you first call `useUpdateEstadoVendedoraMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstadoVendedoraMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstadoVendedoraMutation, { data, loading, error }] = useUpdateEstadoVendedoraMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEstadoVendedoraMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEstadoVendedoraMutation, UpdateEstadoVendedoraMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEstadoVendedoraMutation, UpdateEstadoVendedoraMutationVariables>(UpdateEstadoVendedoraDocument, options);
      }
export type UpdateEstadoVendedoraMutationHookResult = ReturnType<typeof useUpdateEstadoVendedoraMutation>;
export type UpdateEstadoVendedoraMutationResult = Apollo.MutationResult<UpdateEstadoVendedoraMutation>;
export type UpdateEstadoVendedoraMutationOptions = Apollo.BaseMutationOptions<UpdateEstadoVendedoraMutation, UpdateEstadoVendedoraMutationVariables>;
export const UpdateEventoDocument = gql`
    mutation UpdateEvento($input: EventoInput!) {
  UpdateEvento(input: $input) {
    eventoId
    slug
    titulo
    descripcionCorta
    descripcionLarga
    terminosCondiciones
    direccion
    ubicacion
    fecha
    hora
    imagenPrincipal {
      id
      titulo
      url
    }
    fechaInicial
    horaInicial
    fechaFinal
    horaFinal
    estado
    feriaId
  }
}
    `;
export type UpdateEventoMutationFn = Apollo.MutationFunction<UpdateEventoMutation, UpdateEventoMutationVariables>;

/**
 * __useUpdateEventoMutation__
 *
 * To run a mutation, you first call `useUpdateEventoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventoMutation, { data, loading, error }] = useUpdateEventoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateEventoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventoMutation, UpdateEventoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEventoMutation, UpdateEventoMutationVariables>(UpdateEventoDocument, options);
      }
export type UpdateEventoMutationHookResult = ReturnType<typeof useUpdateEventoMutation>;
export type UpdateEventoMutationResult = Apollo.MutationResult<UpdateEventoMutation>;
export type UpdateEventoMutationOptions = Apollo.BaseMutationOptions<UpdateEventoMutation, UpdateEventoMutationVariables>;
export const UpdateFeriaDocument = gql`
    mutation UpdateFeria($input: FeriaInput!) {
  UpdateFeria(input: $input) {
    feriaId
    titulo
    descripcionCorta
    descripcionLarga
    terminosCondiciones
    imagenPrincipal {
      id
      titulo
      url
    }
    imagenSecundaria {
      id
      titulo
      url
    }
    fecha
    hora
    fechaInicial
    horaInicial
    fechaFinal
    horaFinal
    descuento
  }
}
    `;
export type UpdateFeriaMutationFn = Apollo.MutationFunction<UpdateFeriaMutation, UpdateFeriaMutationVariables>;

/**
 * __useUpdateFeriaMutation__
 *
 * To run a mutation, you first call `useUpdateFeriaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFeriaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFeriaMutation, { data, loading, error }] = useUpdateFeriaMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateFeriaMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFeriaMutation, UpdateFeriaMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFeriaMutation, UpdateFeriaMutationVariables>(UpdateFeriaDocument, options);
      }
export type UpdateFeriaMutationHookResult = ReturnType<typeof useUpdateFeriaMutation>;
export type UpdateFeriaMutationResult = Apollo.MutationResult<UpdateFeriaMutation>;
export type UpdateFeriaMutationOptions = Apollo.BaseMutationOptions<UpdateFeriaMutation, UpdateFeriaMutationVariables>;
export const UpdatePasswordDocument = gql`
    mutation UpdatePassword($input: UpdatePasswordInput) {
  UpdatePassword(input: $input) {
    nombres
    apellidos
    apiToken
  }
}
    `;
export type UpdatePasswordMutationFn = Apollo.MutationFunction<UpdatePasswordMutation, UpdatePasswordMutationVariables>;

/**
 * __useUpdatePasswordMutation__
 *
 * To run a mutation, you first call `useUpdatePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePasswordMutation, { data, loading, error }] = useUpdatePasswordMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePasswordMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePasswordMutation, UpdatePasswordMutationVariables>(UpdatePasswordDocument, options);
      }
export type UpdatePasswordMutationHookResult = ReturnType<typeof useUpdatePasswordMutation>;
export type UpdatePasswordMutationResult = Apollo.MutationResult<UpdatePasswordMutation>;
export type UpdatePasswordMutationOptions = Apollo.BaseMutationOptions<UpdatePasswordMutation, UpdatePasswordMutationVariables>;
export const UpdatePrecioDocument = gql`
    mutation UpdatePrecio($input: ButacaInput) {
  UpdatePrecio(input: $input) {
    butacaId
    tendido
    codigo
    cantidad
    precio
  }
}
    `;
export type UpdatePrecioMutationFn = Apollo.MutationFunction<UpdatePrecioMutation, UpdatePrecioMutationVariables>;

/**
 * __useUpdatePrecioMutation__
 *
 * To run a mutation, you first call `useUpdatePrecioMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePrecioMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePrecioMutation, { data, loading, error }] = useUpdatePrecioMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePrecioMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePrecioMutation, UpdatePrecioMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePrecioMutation, UpdatePrecioMutationVariables>(UpdatePrecioDocument, options);
      }
export type UpdatePrecioMutationHookResult = ReturnType<typeof useUpdatePrecioMutation>;
export type UpdatePrecioMutationResult = Apollo.MutationResult<UpdatePrecioMutation>;
export type UpdatePrecioMutationOptions = Apollo.BaseMutationOptions<UpdatePrecioMutation, UpdatePrecioMutationVariables>;
export const UpdatePrecioReferencialDocument = gql`
    mutation UpdatePrecioReferencial($input: ReferencialInput!) {
  UpdatePrecioReferencial(input: $input) {
    referenciaId
    tendido
    titulo
    precio
  }
}
    `;
export type UpdatePrecioReferencialMutationFn = Apollo.MutationFunction<UpdatePrecioReferencialMutation, UpdatePrecioReferencialMutationVariables>;

/**
 * __useUpdatePrecioReferencialMutation__
 *
 * To run a mutation, you first call `useUpdatePrecioReferencialMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePrecioReferencialMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePrecioReferencialMutation, { data, loading, error }] = useUpdatePrecioReferencialMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdatePrecioReferencialMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePrecioReferencialMutation, UpdatePrecioReferencialMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePrecioReferencialMutation, UpdatePrecioReferencialMutationVariables>(UpdatePrecioReferencialDocument, options);
      }
export type UpdatePrecioReferencialMutationHookResult = ReturnType<typeof useUpdatePrecioReferencialMutation>;
export type UpdatePrecioReferencialMutationResult = Apollo.MutationResult<UpdatePrecioReferencialMutation>;
export type UpdatePrecioReferencialMutationOptions = Apollo.BaseMutationOptions<UpdatePrecioReferencialMutation, UpdatePrecioReferencialMutationVariables>;
export const UpdateVendedoraDocument = gql`
    mutation UpdateVendedora($input: VendedoraInput!) {
  UpdateVendedora(input: $input) {
    id
    nombres
    estado
  }
}
    `;
export type UpdateVendedoraMutationFn = Apollo.MutationFunction<UpdateVendedoraMutation, UpdateVendedoraMutationVariables>;

/**
 * __useUpdateVendedoraMutation__
 *
 * To run a mutation, you first call `useUpdateVendedoraMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVendedoraMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVendedoraMutation, { data, loading, error }] = useUpdateVendedoraMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVendedoraMutation(baseOptions?: Apollo.MutationHookOptions<UpdateVendedoraMutation, UpdateVendedoraMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateVendedoraMutation, UpdateVendedoraMutationVariables>(UpdateVendedoraDocument, options);
      }
export type UpdateVendedoraMutationHookResult = ReturnType<typeof useUpdateVendedoraMutation>;
export type UpdateVendedoraMutationResult = Apollo.MutationResult<UpdateVendedoraMutation>;
export type UpdateVendedoraMutationOptions = Apollo.BaseMutationOptions<UpdateVendedoraMutation, UpdateVendedoraMutationVariables>;
export const GetAllAsientosDocument = gql`
    query GetAllAsientos($tendido: String, $eventoId: Int) {
  GetAllAsientos(tendido: $tendido, eventoId: $eventoId) {
    asientoId
    tendido
    codigo
    asiento
    reservado
  }
}
    `;

/**
 * __useGetAllAsientosQuery__
 *
 * To run a query within a React component, call `useGetAllAsientosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAsientosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAsientosQuery({
 *   variables: {
 *      tendido: // value for 'tendido'
 *      eventoId: // value for 'eventoId'
 *   },
 * });
 */
export function useGetAllAsientosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllAsientosQuery, GetAllAsientosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAsientosQuery, GetAllAsientosQueryVariables>(GetAllAsientosDocument, options);
      }
export function useGetAllAsientosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAsientosQuery, GetAllAsientosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAsientosQuery, GetAllAsientosQueryVariables>(GetAllAsientosDocument, options);
        }
export type GetAllAsientosQueryHookResult = ReturnType<typeof useGetAllAsientosQuery>;
export type GetAllAsientosLazyQueryHookResult = ReturnType<typeof useGetAllAsientosLazyQuery>;
export type GetAllAsientosQueryResult = Apollo.QueryResult<GetAllAsientosQuery, GetAllAsientosQueryVariables>;
export const GetAllAsientosAbonadosDocument = gql`
    query GetAllAsientosAbonados($tendido: String, $feriaId: Int) {
  GetAllAsientosAbonados(tendido: $tendido, feriaId: $feriaId) {
    asientoId
    tendido
    codigo
    reservado
    asiento
    feriaId
  }
}
    `;

/**
 * __useGetAllAsientosAbonadosQuery__
 *
 * To run a query within a React component, call `useGetAllAsientosAbonadosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAsientosAbonadosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAsientosAbonadosQuery({
 *   variables: {
 *      tendido: // value for 'tendido'
 *      feriaId: // value for 'feriaId'
 *   },
 * });
 */
export function useGetAllAsientosAbonadosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllAsientosAbonadosQuery, GetAllAsientosAbonadosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAsientosAbonadosQuery, GetAllAsientosAbonadosQueryVariables>(GetAllAsientosAbonadosDocument, options);
      }
export function useGetAllAsientosAbonadosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAsientosAbonadosQuery, GetAllAsientosAbonadosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAsientosAbonadosQuery, GetAllAsientosAbonadosQueryVariables>(GetAllAsientosAbonadosDocument, options);
        }
export type GetAllAsientosAbonadosQueryHookResult = ReturnType<typeof useGetAllAsientosAbonadosQuery>;
export type GetAllAsientosAbonadosLazyQueryHookResult = ReturnType<typeof useGetAllAsientosAbonadosLazyQuery>;
export type GetAllAsientosAbonadosQueryResult = Apollo.QueryResult<GetAllAsientosAbonadosQuery, GetAllAsientosAbonadosQueryVariables>;
export const GetAllBloquesDocument = gql`
    query GetAllBloques($tendido: String, $feriaId: Int) {
  GetAllBloques(tendido: $tendido, feriaId: $feriaId) {
    bloqueId
    tendido
    asiento
    codigo
    reservado
  }
}
    `;

/**
 * __useGetAllBloquesQuery__
 *
 * To run a query within a React component, call `useGetAllBloquesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBloquesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBloquesQuery({
 *   variables: {
 *      tendido: // value for 'tendido'
 *      feriaId: // value for 'feriaId'
 *   },
 * });
 */
export function useGetAllBloquesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBloquesQuery, GetAllBloquesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBloquesQuery, GetAllBloquesQueryVariables>(GetAllBloquesDocument, options);
      }
export function useGetAllBloquesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBloquesQuery, GetAllBloquesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBloquesQuery, GetAllBloquesQueryVariables>(GetAllBloquesDocument, options);
        }
export type GetAllBloquesQueryHookResult = ReturnType<typeof useGetAllBloquesQuery>;
export type GetAllBloquesLazyQueryHookResult = ReturnType<typeof useGetAllBloquesLazyQuery>;
export type GetAllBloquesQueryResult = Apollo.QueryResult<GetAllBloquesQuery, GetAllBloquesQueryVariables>;
export const GetAllButacasDocument = gql`
    query GetAllButacas($tendido: String) {
  GetAllButacas(tendido: $tendido) {
    numeroTotal
    data {
      butacaId
      tendido
      codigo
      cantidad
      precio
    }
  }
}
    `;

/**
 * __useGetAllButacasQuery__
 *
 * To run a query within a React component, call `useGetAllButacasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllButacasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllButacasQuery({
 *   variables: {
 *      tendido: // value for 'tendido'
 *   },
 * });
 */
export function useGetAllButacasQuery(baseOptions?: Apollo.QueryHookOptions<GetAllButacasQuery, GetAllButacasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllButacasQuery, GetAllButacasQueryVariables>(GetAllButacasDocument, options);
      }
export function useGetAllButacasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllButacasQuery, GetAllButacasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllButacasQuery, GetAllButacasQueryVariables>(GetAllButacasDocument, options);
        }
export type GetAllButacasQueryHookResult = ReturnType<typeof useGetAllButacasQuery>;
export type GetAllButacasLazyQueryHookResult = ReturnType<typeof useGetAllButacasLazyQuery>;
export type GetAllButacasQueryResult = Apollo.QueryResult<GetAllButacasQuery, GetAllButacasQueryVariables>;
export const GetAllEventosDocument = gql`
    query GetAllEventos($feriaId: Int, $estado: String) {
  GetAllEventos(feriaId: $feriaId, estado: $estado) {
    numeroTotal
    data {
      eventoId
      slug
      titulo
      descripcionCorta
      descripcionLarga
      terminosCondiciones
      direccion
      ubicacion
      fecha
      hora
      imagenPrincipal {
        id
        titulo
        url
      }
      fechaInicial
      horaInicial
      fechaFinal
      horaFinal
      estado
      feriaId
    }
  }
}
    `;

/**
 * __useGetAllEventosQuery__
 *
 * To run a query within a React component, call `useGetAllEventosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllEventosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllEventosQuery({
 *   variables: {
 *      feriaId: // value for 'feriaId'
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllEventosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllEventosQuery, GetAllEventosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllEventosQuery, GetAllEventosQueryVariables>(GetAllEventosDocument, options);
      }
export function useGetAllEventosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllEventosQuery, GetAllEventosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllEventosQuery, GetAllEventosQueryVariables>(GetAllEventosDocument, options);
        }
export type GetAllEventosQueryHookResult = ReturnType<typeof useGetAllEventosQuery>;
export type GetAllEventosLazyQueryHookResult = ReturnType<typeof useGetAllEventosLazyQuery>;
export type GetAllEventosQueryResult = Apollo.QueryResult<GetAllEventosQuery, GetAllEventosQueryVariables>;
export const GetAllImagenesDocument = gql`
    query GetAllImagenes($pagina: Int, $numeroPagina: Int) {
  GetAllImagenes(pagina: $pagina, numeroPagina: $numeroPagina) {
    numeroTotal
    data {
      id
      titulo
      url
    }
  }
}
    `;

/**
 * __useGetAllImagenesQuery__
 *
 * To run a query within a React component, call `useGetAllImagenesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllImagenesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllImagenesQuery({
 *   variables: {
 *      pagina: // value for 'pagina'
 *      numeroPagina: // value for 'numeroPagina'
 *   },
 * });
 */
export function useGetAllImagenesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllImagenesQuery, GetAllImagenesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllImagenesQuery, GetAllImagenesQueryVariables>(GetAllImagenesDocument, options);
      }
export function useGetAllImagenesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllImagenesQuery, GetAllImagenesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllImagenesQuery, GetAllImagenesQueryVariables>(GetAllImagenesDocument, options);
        }
export type GetAllImagenesQueryHookResult = ReturnType<typeof useGetAllImagenesQuery>;
export type GetAllImagenesLazyQueryHookResult = ReturnType<typeof useGetAllImagenesLazyQuery>;
export type GetAllImagenesQueryResult = Apollo.QueryResult<GetAllImagenesQuery, GetAllImagenesQueryVariables>;
export const GetAllPedidosDocument = gql`
    query GetAllPedidos($pagina: Int!, $numeroPagina: Int!) {
  GetAllPedidos(pagina: $pagina, numeroPagina: $numeroPagina) {
    numeroTotal
    data {
      pedidoId
      tipoComprobante
      numeroComprobante
      razonSocial
      precioTotal
      fechaPedido
      usuarioId
      Usuario {
        id
        tipoUsuario
        tipoDocumento
        numeroDocumento
        nombres
        apellidos
        celular
        email
        apiToken
      }
      DetallePedido {
        detallePedidoId
        tendido
        codigo
        asiento
        precio
        eventoId
        feriaId
        pedidoId
      }
    }
  }
}
    `;

/**
 * __useGetAllPedidosQuery__
 *
 * To run a query within a React component, call `useGetAllPedidosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPedidosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPedidosQuery({
 *   variables: {
 *      pagina: // value for 'pagina'
 *      numeroPagina: // value for 'numeroPagina'
 *   },
 * });
 */
export function useGetAllPedidosQuery(baseOptions: Apollo.QueryHookOptions<GetAllPedidosQuery, GetAllPedidosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPedidosQuery, GetAllPedidosQueryVariables>(GetAllPedidosDocument, options);
      }
export function useGetAllPedidosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPedidosQuery, GetAllPedidosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPedidosQuery, GetAllPedidosQueryVariables>(GetAllPedidosDocument, options);
        }
export type GetAllPedidosQueryHookResult = ReturnType<typeof useGetAllPedidosQuery>;
export type GetAllPedidosLazyQueryHookResult = ReturnType<typeof useGetAllPedidosLazyQuery>;
export type GetAllPedidosQueryResult = Apollo.QueryResult<GetAllPedidosQuery, GetAllPedidosQueryVariables>;
export const GetAllPrecioReferencialDocument = gql`
    query GetAllPrecioReferencial {
  GetAllPrecioReferencial {
    tendido
    precio
    titulo
    referenciaId
  }
}
    `;

/**
 * __useGetAllPrecioReferencialQuery__
 *
 * To run a query within a React component, call `useGetAllPrecioReferencialQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPrecioReferencialQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPrecioReferencialQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllPrecioReferencialQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPrecioReferencialQuery, GetAllPrecioReferencialQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPrecioReferencialQuery, GetAllPrecioReferencialQueryVariables>(GetAllPrecioReferencialDocument, options);
      }
export function useGetAllPrecioReferencialLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPrecioReferencialQuery, GetAllPrecioReferencialQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPrecioReferencialQuery, GetAllPrecioReferencialQueryVariables>(GetAllPrecioReferencialDocument, options);
        }
export type GetAllPrecioReferencialQueryHookResult = ReturnType<typeof useGetAllPrecioReferencialQuery>;
export type GetAllPrecioReferencialLazyQueryHookResult = ReturnType<typeof useGetAllPrecioReferencialLazyQuery>;
export type GetAllPrecioReferencialQueryResult = Apollo.QueryResult<GetAllPrecioReferencialQuery, GetAllPrecioReferencialQueryVariables>;
export const GetAllSuscriptoresDocument = gql`
    query GetAllSuscriptores($pagina: Int, $numeroPagina: Int) {
  GetAllSuscriptores(pagina: $pagina, numeroPagina: $numeroPagina) {
    numeroTotal
    data {
      suscriptorId
      nombres
      email
    }
  }
}
    `;

/**
 * __useGetAllSuscriptoresQuery__
 *
 * To run a query within a React component, call `useGetAllSuscriptoresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSuscriptoresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSuscriptoresQuery({
 *   variables: {
 *      pagina: // value for 'pagina'
 *      numeroPagina: // value for 'numeroPagina'
 *   },
 * });
 */
export function useGetAllSuscriptoresQuery(baseOptions?: Apollo.QueryHookOptions<GetAllSuscriptoresQuery, GetAllSuscriptoresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllSuscriptoresQuery, GetAllSuscriptoresQueryVariables>(GetAllSuscriptoresDocument, options);
      }
export function useGetAllSuscriptoresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllSuscriptoresQuery, GetAllSuscriptoresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllSuscriptoresQuery, GetAllSuscriptoresQueryVariables>(GetAllSuscriptoresDocument, options);
        }
export type GetAllSuscriptoresQueryHookResult = ReturnType<typeof useGetAllSuscriptoresQuery>;
export type GetAllSuscriptoresLazyQueryHookResult = ReturnType<typeof useGetAllSuscriptoresLazyQuery>;
export type GetAllSuscriptoresQueryResult = Apollo.QueryResult<GetAllSuscriptoresQuery, GetAllSuscriptoresQueryVariables>;
export const GetAllVendedorasDocument = gql`
    query GetAllVendedoras($pagina: Int, $numeroPagina: Int, $estado: String) {
  GetAllVendedoras(pagina: $pagina, numeroPagina: $numeroPagina, estado: $estado) {
    numeroTotal
    data {
      id
      tipoDocumento
      numeroDocumento
      nombres
      apellidos
      celular
      email
      estado
    }
  }
}
    `;

/**
 * __useGetAllVendedorasQuery__
 *
 * To run a query within a React component, call `useGetAllVendedorasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllVendedorasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllVendedorasQuery({
 *   variables: {
 *      pagina: // value for 'pagina'
 *      numeroPagina: // value for 'numeroPagina'
 *      estado: // value for 'estado'
 *   },
 * });
 */
export function useGetAllVendedorasQuery(baseOptions?: Apollo.QueryHookOptions<GetAllVendedorasQuery, GetAllVendedorasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllVendedorasQuery, GetAllVendedorasQueryVariables>(GetAllVendedorasDocument, options);
      }
export function useGetAllVendedorasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllVendedorasQuery, GetAllVendedorasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllVendedorasQuery, GetAllVendedorasQueryVariables>(GetAllVendedorasDocument, options);
        }
export type GetAllVendedorasQueryHookResult = ReturnType<typeof useGetAllVendedorasQuery>;
export type GetAllVendedorasLazyQueryHookResult = ReturnType<typeof useGetAllVendedorasLazyQuery>;
export type GetAllVendedorasQueryResult = Apollo.QueryResult<GetAllVendedorasQuery, GetAllVendedorasQueryVariables>;
export const GetAllVentasDocument = gql`
    query GetAllVentas($pagina: Int, $numeroPagina: Int) {
  GetAllVentas(pagina: $pagina, numeroPagina: $numeroPagina) {
    numeroTotal
    data {
      ventaId
      tipoComprobante
      numeroComprobante
      razonSocial
      celular
      tipoVenta
      email
      precioTotal
      fechaVenta
      DetalleVenta {
        detalleVentaId
        tendido
        codigo
        asiento
        precio
        eventoId
        feriaId
        ventaId
      }
    }
    numeroTotal
  }
}
    `;

/**
 * __useGetAllVentasQuery__
 *
 * To run a query within a React component, call `useGetAllVentasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllVentasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllVentasQuery({
 *   variables: {
 *      pagina: // value for 'pagina'
 *      numeroPagina: // value for 'numeroPagina'
 *   },
 * });
 */
export function useGetAllVentasQuery(baseOptions?: Apollo.QueryHookOptions<GetAllVentasQuery, GetAllVentasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllVentasQuery, GetAllVentasQueryVariables>(GetAllVentasDocument, options);
      }
export function useGetAllVentasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllVentasQuery, GetAllVentasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllVentasQuery, GetAllVentasQueryVariables>(GetAllVentasDocument, options);
        }
export type GetAllVentasQueryHookResult = ReturnType<typeof useGetAllVentasQuery>;
export type GetAllVentasLazyQueryHookResult = ReturnType<typeof useGetAllVentasLazyQuery>;
export type GetAllVentasQueryResult = Apollo.QueryResult<GetAllVentasQuery, GetAllVentasQueryVariables>;
export const GetFeriaDocument = gql`
    query GetFeria {
  GetFeria {
    feriaId
    titulo
    descripcionCorta
    descripcionLarga
    terminosCondiciones
    imagenPrincipal {
      id
      titulo
      url
    }
    imagenSecundaria {
      id
      titulo
      url
    }
    fecha
    hora
    fechaInicial
    horaInicial
    fechaFinal
    horaFinal
    descuento
  }
}
    `;

/**
 * __useGetFeriaQuery__
 *
 * To run a query within a React component, call `useGetFeriaQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFeriaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFeriaQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFeriaQuery(baseOptions?: Apollo.QueryHookOptions<GetFeriaQuery, GetFeriaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFeriaQuery, GetFeriaQueryVariables>(GetFeriaDocument, options);
      }
export function useGetFeriaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFeriaQuery, GetFeriaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFeriaQuery, GetFeriaQueryVariables>(GetFeriaDocument, options);
        }
export type GetFeriaQueryHookResult = ReturnType<typeof useGetFeriaQuery>;
export type GetFeriaLazyQueryHookResult = ReturnType<typeof useGetFeriaLazyQuery>;
export type GetFeriaQueryResult = Apollo.QueryResult<GetFeriaQuery, GetFeriaQueryVariables>;
export const GetReporteExcelDocument = gql`
    query GetReporteExcel($pedidoId: Int!) {
  GetReporteExcel(pedidoId: $pedidoId)
}
    `;

/**
 * __useGetReporteExcelQuery__
 *
 * To run a query within a React component, call `useGetReporteExcelQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetReporteExcelQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetReporteExcelQuery({
 *   variables: {
 *      pedidoId: // value for 'pedidoId'
 *   },
 * });
 */
export function useGetReporteExcelQuery(baseOptions: Apollo.QueryHookOptions<GetReporteExcelQuery, GetReporteExcelQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetReporteExcelQuery, GetReporteExcelQueryVariables>(GetReporteExcelDocument, options);
      }
export function useGetReporteExcelLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetReporteExcelQuery, GetReporteExcelQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetReporteExcelQuery, GetReporteExcelQueryVariables>(GetReporteExcelDocument, options);
        }
export type GetReporteExcelQueryHookResult = ReturnType<typeof useGetReporteExcelQuery>;
export type GetReporteExcelLazyQueryHookResult = ReturnType<typeof useGetReporteExcelLazyQuery>;
export type GetReporteExcelQueryResult = Apollo.QueryResult<GetReporteExcelQuery, GetReporteExcelQueryVariables>;
export const GetVentaIdDocument = gql`
    query GetVentaId($ventaId: Int) {
  GetVentaId(ventaId: $ventaId) {
    ventaId
    tipoComprobante
    razonSocial
    celular
    precioTotal
    fechaVenta
    usuarioId
    DetalleVenta {
      detalleVentaId
      tendido
      codigo
      asiento
      precio
      feriaId
      eventoId
      Evento {
        titulo
      }
    }
  }
}
    `;

/**
 * __useGetVentaIdQuery__
 *
 * To run a query within a React component, call `useGetVentaIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVentaIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVentaIdQuery({
 *   variables: {
 *      ventaId: // value for 'ventaId'
 *   },
 * });
 */
export function useGetVentaIdQuery(baseOptions?: Apollo.QueryHookOptions<GetVentaIdQuery, GetVentaIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVentaIdQuery, GetVentaIdQueryVariables>(GetVentaIdDocument, options);
      }
export function useGetVentaIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVentaIdQuery, GetVentaIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVentaIdQuery, GetVentaIdQueryVariables>(GetVentaIdDocument, options);
        }
export type GetVentaIdQueryHookResult = ReturnType<typeof useGetVentaIdQuery>;
export type GetVentaIdLazyQueryHookResult = ReturnType<typeof useGetVentaIdLazyQuery>;
export type GetVentaIdQueryResult = Apollo.QueryResult<GetVentaIdQuery, GetVentaIdQueryVariables>;