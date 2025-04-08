import React, { ContextType, createContext, ReactNode, useContext, useReducer } from "react";

interface Producto {
    id: number;
    name: string;
    price: number;
    quantity: number;
    description: string;
    image?: string;
}

type State = Producto[];

type Action =
|{type: 'agregar'; payload: Producto}
|{type: 'eliminar'; payload: number}
|{type: 'incrementar'; payload: number}
|{type: 'decrementar'; payload: number}
|{type: 'limpiar'}

type CarritoContextType = {
    carrito: State;
    cantidadTotal: number;
    dispatch: React.Dispatch<Action>;
};

type CarritoProviderProps = {
    children: ReactNode;
};


const CarritoContext = createContext<CarritoContextType | undefined>(undefined);

const carritoReducer = (state: State, action: Action): State =>{
    const {type} = action;

    switch(type){
        case 'agregar': {
            const productExists = state.find((p) => p.id === action.payload.id);
            if(productExists) {
                return state.map((p) => 
                    p.id === action.payload.id
                    ? {...p, quantity: p.quantity + action.payload.quantity}
                    : p
                );
            }
            return [...state, action.payload]
        }
        case 'eliminar': {
            return state.filter((p) => p.id !== action.payload)
        }

        case 'incrementar': {
            return state.map((p) =>
                p.id === action.payload ?  {...p, quantity: p.quantity + 1} : p
            )
        }

        case 'decrementar': {
            return state.map((p) =>
                p.id === action.payload && p.quantity > 1 ? {...p, quantity: p.quantity - 1} : p
            )
            .filter((p) => p.quantity > 0);
        }

        case 'limpiar': {
            return [];
        }

        default:
            return state;

    };
}

export const CarritoProvider = ({children} : CarritoProviderProps) => {
    const [carrito, dispatch] = useReducer(carritoReducer, []);
    const cantidadTotal = carrito.reduce((total, producto) => total + producto.quantity, 0);

    return(
        <CarritoContext.Provider value ={{carrito, cantidadTotal, dispatch}}>
            {children}
        </CarritoContext.Provider>
    );
}

export const useCarrito = () =>{
    const context = useContext(CarritoContext);

    if (context === undefined){
        throw new Error("useCarrito debe usarse dentro de un CarritoProvider")
    }
    return context
};



