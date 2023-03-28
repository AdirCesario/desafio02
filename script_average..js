const students = [
  {
      name : "Daniel",
      nota1: 5,
      nota2: 7,  
  },
  
  {
      name : "Gabriel",
      nota1: 9,
      nota2: 7, 
  },
  
  {
      name : "Roberto",
      nota1: 10,
      nota2: 9.5, 
  },
  ]
  
  
  function Average(nota1, nota2) {
      return (nota1+nota2) /2 
    }
    
    function studentAverage(student){
    if(Average(student.nota1, student.nota2) > 7) {    
      return `O aluno (a) ${student.name}  foi aprovado no Concurso! Parabéns! sua média foi:
      ${Average(student.nota1, student.nota2)} `
    } else {
      return `O aluno (a) ${student.name} foi reprovado(a) Tente novamente! sua média foi:
      ${Average(student.nota1, student.nota2)} `
    }
    }
    for (let student of students) {
      let averageMessage = studentAverage(student)
      alert(averageMessage)
    }
