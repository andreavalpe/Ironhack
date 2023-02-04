<script setup>
import { ref, reactive } from "vue";

const mathBooks = reactive ([
    {
        bookTitle: "!Qué las matemáticas te acompañen!",
        bookAuthor:"Raquel García Uldemolins",
        bookDescription:"Las matemáticas están en todo nuestro entorno y este libro lo demuestra intentando acercarte a ellas.",
        bookContent: "Matemáticas, Ciencias",
    },
    {
        bookTitle: "Apocalipsis matemático",
        bookAuthor: "Eduardo Sáenz de Cabezón",
        bookDescription: "De nuevo un libro para acercarte a las matemáticas con teorías muy interesantes y asombrosas.",
        bookContent: "Matemáticas, Ciencias",
    },
    {
        bookTitle: "Y me llevo una",
        bookAuthor: "JoseÁngel Murcia",
        bookDescription: "Plantea revisar la enseñanza de las matemáticas de una forma crítica y propone un ajuste de cuentas con las matemáticas escolares.",
        bookContent: "Matemáticas, Ciencias",
    },
]);

</script>

<template>
    <div>
    <h2> Libros matemáticos </h2>
    <section v-for="book in mathBooks">
      <h3> {{ book.bookTitle }} </h3>
      <i> {{ book.bookAuthor }} </i>
      <p> {{ book.bookDescription }} </p>
      <p> {{ book.bookContent }} </p>
    </section>
    </div>
</template>

<style scoped></style>