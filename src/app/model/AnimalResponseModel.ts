export class ResponseListAnimal{
  data!: AnimalModel[];
  
  
}
export class AnimalModel {
  
  IdAnimal!: number;
  Nome!: string;
  Raca!: string;
  Idade!: number;
  IdOrg!:string ;
  OrganizacaoNome!: string;
  Email!: string;
  UF!: string;
 // Descricao!:string;
  
}