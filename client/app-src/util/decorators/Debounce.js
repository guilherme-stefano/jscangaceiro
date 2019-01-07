export function debounce(milissegundos = 500) {
    return function(target, key, descriptor){
        let timer = 0;
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args){
            if(event)   event.preventDefault();
            clearTimeout(timer);
            timer = setTimeout(() => metodoOriginal.apply(this, args), milissegundos);
        }
        return descriptor;
    }
}