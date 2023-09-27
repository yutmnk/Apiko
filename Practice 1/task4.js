function calculateWordsInString(string) {
    
    const wordsArray = string.split(' ');
    
    const nonEmptyWords = wordsArray.filter(word => word !== '');

    const wordCount = nonEmptyWords.length;

    console.log(`Кількість слів у стрічці: "${string}" - ${wordCount}`);
}

calculateWordsInString("Easy string for count");
calculateWordsInString("Easy");
calculateWordsInString("Some string with a triple   space");
calculateWordsInString("Some?  string, with a triple   space");
