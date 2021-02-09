var quiz = [
  {
    question: 'What is the largest organ of the human body?',
    options: ['Brain', 'Skeleton', 'Heart', 'Skin'],
    answer: 4,
  },
  {
    question: 'What is the term for cell death?',
    options: ['Apoptosis', 'Mitosis', 'Osmosis', 'Diffusion'],
    answer: 1,
  },
  {
    question: 'What does the acronym DNA stand for?',
    options: [
      'Dinitrogen Acetate',
      'Determined Not Active',
      'Deoxyribonucleic acid',
      'Denucleated actins',
    ],
    answer: 3,
  },
  {
    question:
      'Name the process used by plants to convert light energy into chemical energy.',
    options: ['Photosynthesis', 'Mitosis', 'Absorption', 'Diffusion'],
    answer: 1,
  },
  {
    question: 'What is a fertilized egg called?',
    options: ['Larva', 'Zygote', 'Embryo', 'Fetus'],
    answer: 2,
  },
  {
    question: 'Which hormone is associated with the fight-or-flight response?',
    options: [
      'Dopamine',
      'Testosterone',
      'Thyroid Stimulating Hormone',
      'Norepinephrine',
    ],
    answer: 4,
  },
  {
    question:
      "Name the eukaryotic cell organelle that contains the majority of the cell's genetic material.",
    options: ['Mitochondria', 'Nucleus', 'Riboflavin', 'Golgi body'],
    answer: 2,
  },
  {
    question: 'What is the longest bone in the human body?',
    options: ['Femur', 'Tibia', 'Fibia', 'Humerus'],
    answer: 1,
  },
  {
    question: 'Which molecule is used to store energy for cells?',
    options: ['DNA', 'ATP', 'RNA', 'cAMP'],
    answer: 2,
  },
  {
    question: 'How many chromosomes does a person have?',
    options: ['23', '46', '92', '138'],
    answer: 2,
  },
  {
        question:
            'If the length of E.coli DNA is 1.36 mm, can you calculate the number of base pairs in E.coli?',
        options: [
            'a) 1360000 bp',
            'b) 4000000 bp',
            'c) 34000 bp',
            'd) 272000 bp',
        ],
        answer: 2,
    },
    {
        question:
            'If an E.coli DNA is having 1600 bp length, it may have how many nucleosome?',
        options: ['a) Six  ', 'b) Ten ', 'c) Thirty four  ', 'd) None '],
        answer: 4,
    },
    {
        question:
            'How many nucleotides are present in Bacteriophage Φ (phi)- 174?',
        options: ['a) 48502 BP  ', 'b) 2130 ', 'c) 5134 BP  ', 'd) 5386 '],
        answer: 4,
    },
    {
        question: "Chargaff's rule not applicable on?",
        options: [
            'a) Lambda Phage DNA  ',
            'b) DNA of E.Coli ',
            'c) Plasmid of Bacteria  ',
            'd) Genome of bacteriophage Φ (phi)- 174 ',
        ],
        answer: 4,
    },
    {
        question:
            'The amount of purines is equal to the amount of pyrimidines was suggested by?',
        options: [
            'a) Robert Brown ',
            'b) Meischer',
            'c) Chargaff ',
            'd) Khorana',
        ],
        answer: 3,
    },
    {
        question:
            'The number of pairs of hydrogen bonds in the DNA molecule of 150 base pairs having 60 AT pairs would be?',
        options: ['a) 300  ', 'b) 150 ', 'c) 390  ', 'd) 490 '],
        answer: 3,
    },
    {
        question: 'Watson and Crick proposed the model of DNA in?',
        options: ['a) 1955  ', 'b) 1953 ', 'c) 1943  ', 'd) 1963 '],
        answer: 2,
    },
    {
        question:
            'The linkage of nucleosome units discovered by Olins and Olins is by?',
        options: [
            'a) Histone H3  ',
            'b) Histone H4 ',
            'c) Linker DNA  ',
            'd) RNA ',
        ],
        answer: 3,
    },
    {
        question: 'Thymine is also called?',
        options: [
            'a) 2 methyl uracil  ',
            'b) 3 methyl uracil ',
            'c) 4 mithyl uracil  ',
            'd) 5 methyl uracil ',
        ],
        answer: 4,
    },
    {
        question: 'X-ray diffraction data of DNA was produced by?',
        options: [
            'a) Watson and Crick ',
            'b) WilKins and Franklin',
            'c) Betason and Punnett ',
            'd) Both (a) and (b)',
        ],
        answer: 2,
    },
    {
        question: 'Nucleotide arrangment in DNA can be seen by?',
        options: [
            'a) X-ray crystallography  ',
            'b) Electron microscope ',
            'c) Ultracentrifuge  ',
            'd) Light Microscope ',
        ],
        answer: 1,
    },
    {
        question: 'The phosphate group in nucleic acids provided by?',
        options: ['a) ATP  ', 'b) P2O5 ', 'c) H3PO4  ', 'd) H2PO4 '],
        answer: 3,
    },
    {
        question:
            'The concept of central dogma in molecular biology was given by?',
        options: [
            'a) Francis Crick  ',
            'b) James Watson ',
            'c) Maurice Wilkins  ',
            'd) Wilkins and Franklin ',
        ],
        answer: 1,
    },
    {
        question:
            'The flow of Genetic information or central dogma is observed to be bidirectional in?',
        options: ['a) Bacteria  ', 'b) Virus ', 'c) Protista  ', 'd) Fungi '],
        answer: 2,
    },
    {
        question: 'Intiator amino acid in the polypeptide chain is?',
        options: [
            'a) Methionine  ',
            'b) Tyrosine ',
            'c) Histidine  ',
            'd) Arginine ',
        ],
        answer: 1,
    },
    {
        question:
            'The ion required to keep the two ribosomal units together during protein synthesis is?',
        options: [
            'a) Potassium ion  ',
            'b) Magnesium ion ',
            'c) Chloride ion  ',
            'd) All the above ',
        ],
        answer: 2,
    },
    {
        question: 'In Ribosome that acts as a catalyst or ribozyme is?',
        options: [
            'a) 40 S rRNA  ',
            'b) 50 S rRNA ',
            'c) 70 S rRNA  ',
            'd) 23 S rRNA ',
        ],
        answer: 4,
    },
    {
        question: 'Protein are formed by?',
        options: [
            'a) Peptide link  ',
            'b) Glycosidic link ',
            'c) Phosphate link  ',
            'd) Phosphodiamine linkage ',
        ],
        answer: 1,
    },
    {
        question: ' The replication of nuclear DNA occurs in?',
        options: [
            'a) G1phase  ',
            'b) G2 phase ',
            'c) S phase  ',
            'd) M phase ',
        ],
        answer: 3,
    },
    {
        question: 'In a polynucleotide chain?',
        options: [
            "a) Free phosphate moiety at 5'-end  ",
            "b) Free phosphate moiety at 3'-end ",
            "c) Free hydroxyl group at 5'-end  ",
            'd) Both B & C are correct ',
        ],
        answer: 1,
    },
    {
        question: '"Beads on string" shows?',
        options: [
            'a) DNA details  ',
            'b) Histone details ',
            'c) Chromatin details  ',
            'd) Nucleotide details ',
        ],
        answer: 3,
    },
    {
        question: 'The number of DNA in chromosome at G2 stage of cell cycle?',
        options: ['a) One  ', 'b) Two ', 'c) Four  ', 'd) Eight '],
        answer: 2,
    },
    {
        question:
            'Atropine is a medication to treat pesticide poisonings as well as slow heart rate; it is a/an?',
        options: [
            'a) Glucoside  ',
            'b) Alkaloid ',
            'c) Terpenoides  ',
            'd) Lectins ',
        ],
        answer: 2,
    },
    {
        question:
            'Hershey & Chase finally proved that the Genetic Material is DNA, They performed experiment on?',
        options: [
            'a) Mycophage  ',
            'b) Streptococcus ',
            'c) Coliphage  ',
            'd) Fission yeast ',
        ],
        answer: 3,
    },
    {
        question:
            'Which enzyme can be used for template independent enzymatic synthesis of RNA?',
        options: [
            'a) RNA Polymerase  ',
            'b) DNA Polymerase ',
            'c) Adenylate Cyclase  ',
            'd) Polynucleotide Phosphorylase ',
        ],
        answer: 4,
    },
];

