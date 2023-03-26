const time = "afternoon";

let jokoJob = "";

switch (time) {
  case "morning":
    jokoJob = "Berkebun Di Ladang";
    break;
  case "afternoon":
    jokoJob = "Menjadi Penjaga Wisata di Desanya";
    break;
  case "evening":
    jokoJob = "Membuat Kue di Rumahnya";
    break;
  default:
    jokoJob = "Tidur Di Rumahnya";
    break;
}

console.log(jokoJob); // Menjadi Penjaga Wisata di Desanya

const jokoDreamJob = "Frontend Engineer";
jokoDreamJob = "Backend Engineer";

// Cannnot assign to 'jokoDreamJob' because joko's commitment
switch (time) {
  case "morning":
    jokoDreamJob = "Berkebun Di Ladang";
    break;
  case "afternoon":
    jokoDreamJob = "Menjadi Penjaga Wisata di Desanya";
    break;
  case "evening":
    jokoDreamJob = "Membuat Kue di Rumahnya";
    break;
  default:
    jokoDreamJob = "Tidur Di Rumahnya";
    break;
}
