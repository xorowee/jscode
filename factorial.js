// n! = n * (n - 1) * (n - 2) * ...*1  загальна формула факторіалу

function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return "Помилка, перевірте дані";
    }

    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }

    // Більш лаконічно, але теж зустрічається
    // Але в такому варіанті не враховується мінусове значення
    return n ? n * factorial(n - 1) : 1;
}

factorial(5)
