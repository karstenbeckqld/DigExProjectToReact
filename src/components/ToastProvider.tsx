import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { gsap } from "gsap";
import { Toast, ToastContextValue } from "../types/types.ts";


const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const addToast = (content: string, type = "") => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prevToasts) => [...prevToasts, { id, content, type }]);
        setTimeout(() => removeToast(id), 3000); // Automatically remove after 3 seconds
    };

    const removeToast = (id: string) => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    };

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div id="toasts" style={{ position: "fixed", top: 10, right: 10, zIndex: 1000 }}>
                {toasts.map((toast) => (
                    <ToastItem key={toast.id} {...toast} onRemove={() => removeToast(toast.id)} />
                ))}
            </div>
        </ToastContext.Provider>
    );
};

const ToastItem = ({ id, content, type, onRemove }: Toast & { onRemove: () => void }) => {
    useEffect(() => {
        const el = document.getElementById(id)!;
        const tl = gsap.timeline();
        tl.from(el, { y: -30, opacity: 0, duration: 0.3, ease: "power3.out" });
        tl.to(el, { marginTop: -50, opacity: 0, delay: 2.7, duration: 0.3, onComplete: onRemove });

        return () => {
            tl.kill();
        };
    }, [id, onRemove]);

    return (
        <div
            id={id}
            className={`toast-entry ${type === "error" ? "is-error" : ""}`}
            style={{
                backgroundColor: type === "error" ? "red" : "green",
                color: "white",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "5px",
            }}
        >
            {content}
        </div>
    );
};