function titleMatchAccuracy(title1, title2) {
    const words1 = title1.toLowerCase().split(" ");
    const words2 = title2.toLowerCase().split(" ");
  
    const matchingWords = words1.filter(word => words2.includes(word));
    const accuracy = (matchingWords.length / words1.length) * 100;
    return accuracy;
  }

  module.exports =titleMatchAccuracy;