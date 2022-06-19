export enum StorageKeys {
    token,
}

export function useStorage() {

    const getRegistro = (key: StorageKeys, session: boolean = false) =>
        JSON.parse(
            (session
                ? sessionStorage.getItem(StorageKeys[key].toString())
                : localStorage.getItem(StorageKeys[key].toString())) || "{}"
        )

    const exists = (key: StorageKeys, session: boolean = false) => {
        if (session) return Boolean(sessionStorage.getItem(StorageKeys[key].toString()));
        else return Boolean(localStorage.getItem(StorageKeys[key].toString()));
    }

    const setRegistro = (key: StorageKeys, obj: any, session: boolean = false) => {
        if (session) {
            sessionStorage.setItem(StorageKeys[key].toString(), JSON.stringify(obj));
        } else {
            localStorage.setItem(StorageKeys[key].toString(), JSON.stringify(obj));
        }
    }

    const delRegistro = (key: StorageKeys, session: boolean = false) => {
        if (session) {
            sessionStorage.removeItem(StorageKeys[key].toString());
        } else {
            localStorage.removeItem(StorageKeys[key].toString());
        }
    }

    return {
        getRegistro,
        setRegistro,
        delRegistro,
        exists,
    };
}
