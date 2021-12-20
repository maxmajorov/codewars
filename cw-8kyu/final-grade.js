function finalGrade (exam, proj) {

    return (exam > 90 || proj > 10) && (proj > 10 || exam > 90) ? 100 :
            exam > 75 && proj > 4 ? 90 : 
            exam > 50 && proj > 1 ? 75 : 0
}