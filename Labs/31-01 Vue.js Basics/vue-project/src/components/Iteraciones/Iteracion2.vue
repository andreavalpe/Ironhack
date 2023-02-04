<script setup>
import {ref, reactive} from "vue";

const returnString = () => {
    const refString = ref("Estas operaciones matemáticas son algunas de las que podemos conseguir siguiendo este método.");
    return refString.value; 
};

</script>

<template>
    <div> 
        <section> <!--Parte 1 de la iteración - usando {{ }}-->
            <h2> Usando métodos para mejorar en matemáticas </h2>
            <p> Vamos hacer la operación matemática de 2+2 que es igual a {{ 2+2 }} usando el "mustache syntax". </p>
        </section>
    
        <section> <!--Parte 2 de la iteración - string -->
            <p> {{ returnString() }} </p>
        </section>
    </div>
    
</template>

<style scoped></style>