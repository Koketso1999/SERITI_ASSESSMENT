.container {  display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 10px 10px;
    grid-auto-flow: row;
    grid-template-areas:
      "Cat-1 Cat-2 Cat-3 Cat-4"
      "Chart-1 Chart-1 Chart-2 Chart-2"
      ". . . ."
      ". . . .";
  }
  
  .Cat-1 { grid-area: Cat-1; }
  
  .Cat-2 { grid-area: Cat-2; }
  
  .Cat-3 { grid-area: Cat-3; }
  
  .Cat-4 { grid-area: Cat-4; }
  
  .Chart-1 { grid-area: Chart-1; }
  
  .Chart-2 { grid-area: Chart-2; }
  