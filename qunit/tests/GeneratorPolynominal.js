// http://www.thonky.com/qr-code-tutorial/how-create-generator-polynomial/
// http://www.thonky.com/qr-code-tutorial/generator-polynomial-tool/
var generatorPolynominalDataProvider = {
     2: [0, 25, 1],
     3: [0, 198, 199, 3],
     4: [0, 75, 249, 78, 6],
     5: [0, 113, 164, 166, 119, 10],
     6: [0, 166, 0, 134, 5, 176, 15],	 
     7: [0,87,229,146,149,238,102,21],
     8: [0,175,238,208,249,215,252,196,28],
     9: [0,95,246,137,231,235,149,11,123,36],
    10: [0,251,67,46,61,118,70,64,94,32,45],
    11: [0,220,192,91,194,172,177,209,116,227,10,55],
    12: [0,102,43,98,121,187,113,198,143,131,87,157,66],
    13: [0,74,152,176,100,86,100,106,104,130,218,206,140,78],
    14: [0,199,249,155,48,190,124,218,137,216,87,207,59,22,91],
    15: [0,8,183,61,91,202,37,51,58,58,237,140,124,5,99,105],
    16: [0,120,104,107,109,102,161,76,3,91,191,147,169,182,194,225,120],
    17: [0,43,139,206,78,43,239,123,206,214,147,24,99,150,39,243,163,136],
    18: [0,215,234,158,94,184,97,118,170,79,187,152,148,252,179,5,98,96,153],
    19: [0,67,3,105,153,52,90,83,17,150,159,44,128,153,133,252,222,138,220,171],
    20: [0,17,60,79,50,61,163,26,187,202,180,221,225,83,239,156,164,212,212,188,190],
    21: [0,240,233,104,247,181,140,67,98,85,200,210,115,148,137,230,36,122,254,148,175,210],
    22: [0,210,171,247,242,93,230,14,109,221,53,200,74,8,172,98,80,219,134,160,105,165,231],
    23: [0,171,102,146,91,49,103,65,17,193,150,14,25,183,248,94,164,224,192,1,78,56,147,253],
    24: [0,229,121,135,48,211,117,251,126,159,180,169,152,192,226,228,218,111,0,117,232,87,96,227,21],
    25: [0,231,181,156,39,170,26,12,59,15,148,201,54,66,237,208,99,167,144,182,95,243,129,178,252,45],
    26: [0,173,125,158,2,103,182,118,17,145,201,111,28,165,53,161,21,245,142,13,102,48,227,153,145,218,70],
    27: [0,79,228,8,165,227,21,180,29,9,237,70,99,45,58,138,135,73,126,172,94,216,193,157,26,17,149,96],
    28: [0,168,223,200,104,224,234,108,180,110,190,195,147,205,27,232,201,21,43,245,87,42,195,212,119,242,37,9,123],
    29: [0,156,45,183,29,151,219,54,96,249,24,136,5,241,175,189,28,75,234,150,148,23,9,202,162,68,250,140,24,151],
    30: [0,41,173,145,152,216,31,179,182,50,48,110,86,239,96,222,125,42,173,226,193,224,130,156,37,251,216,238,40,192,180],
    31: [0,20,37,252,93,63,75,225,31,115,83,113,39,44,73,122,137,118,119,144,248,248,55,1,225,105,123,183,117,187,200,210],
    32: [0,10,6,106,190,249,167,4,67,209,138,138,32,242,123,89,27,120,185,80,156,38,69,171,60,28,222,80,52,254,185,220,241],
    33: [0,245,231,55,24,71,78,76,81,225,212,173,37,215,46,119,229,245,167,126,72,181,94,165,210,98,125,159,184,169,232,185,231,18],
    34: [0,111,77,146,94,26,21,108,19,105,94,113,193,86,140,163,125,58,158,229,239,218,103,56,70,114,61,183,129,167,13,98,62,129,51],
    35: [0,7,94,143,81,247,127,202,202,194,125,146,29,138,162,153,65,105,122,116,238,26,36,216,112,125,228,15,49,8,162,30,126,111,58,85],
    36: [0,200,183,98,16,172,31,246,234,60,152,115,0,167,152,113,248,238,107,18,63,218,37,87,210,105,177,120,74,121,196,117,251,113,233,30,120],
    37: [0,154,75,141,180,61,165,104,232,46,227,96,178,92,135,57,162,120,194,212,174,252,183,42,35,157,111,23,133,100,8,105,37,192,189,159,19,156],
    38: [0,159,34,38,228,230,59,243,95,49,218,176,164,20,65,45,111,39,81,49,118,113,222,193,250,242,168,217,41,164,247,177,30,238,18,120,153,60,193],
    39: [0,81,216,174,47,200,150,59,156,89,143,89,166,183,170,152,21,165,177,113,132,234,5,154,68,124,175,196,157,249,233,83,24,153,241,126,36,116,19,231],
    40: [0,59,116,79,161,252,98,128,205,128,161,247,57,163,56,235,106,53,26,187,174,226,104,170,7,175,35,181,114,88,41,47,163,125,134,72,20,232,53,35,15],
    41: [0,132,167,52,139,184,223,149,92,250,18,83,33,127,109,194,7,211,242,109,66,86,169,87,96,187,159,114,172,118,208,183,200,82,179,38,39,34,242,142,147,55],
    42: [0,250,103,221,230,25,18,137,231,0,3,58,242,221,191,110,84,230,8,188,106,96,147,15,131,139,34,101,223,39,101,213,199,237,254,201,123,171,162,194,117,50,96],
    43: [0,96,67,3,245,217,215,33,65,240,109,144,63,21,131,38,101,153,128,55,31,237,3,94,160,20,87,77,56,191,123,207,75,82,0,122,132,101,145,215,15,121,192,138],
    44: [0,190,7,61,121,71,246,69,55,168,188,89,243,191,25,72,123,9,145,14,247,1,238,44,78,143,62,224,126,118,114,68,163,52,194,217,147,204,169,37,130,113,102,73,181],
    45: [0,6,172,72,250,18,171,171,162,229,187,239,4,187,11,37,228,102,72,102,22,33,73,95,99,132,1,15,89,4,112,130,95,211,235,227,58,35,88,132,23,44,165,54,187,225],
    46: [0,112,94,88,112,253,224,202,115,187,99,89,5,54,113,129,44,58,16,135,216,169,211,36,1,4,96,60,241,73,104,234,8,249,245,119,174,52,25,157,224,43,202,223,19,82,15],
    47: [0,76,164,229,92,79,168,219,110,104,21,220,74,19,199,195,100,93,191,43,213,72,56,138,161,125,187,119,250,189,137,190,76,126,247,93,30,132,6,58,213,208,165,224,152,133,91,61],
    48: [0,228,25,196,130,211,146,60,24,251,90,39,102,240,61,178,63,46,123,115,18,221,111,135,160,182,205,107,206,95,150,120,184,91,21,247,156,140,238,191,11,94,227,84,50,163,39,34,108],
    49: [0,172,121,1,41,193,222,237,64,109,181,52,120,212,226,239,245,208,20,246,34,225,204,134,101,125,206,69,138,250,0,77,58,143,185,220,254,210,190,112,88,91,57,90,109,5,13,181,25,156],
    50: [0,232,125,157,161,164,9,118,46,209,99,203,193,35,3,209,111,195,242,203,225,46,13,32,160,126,209,130,160,242,215,242,75,77,42,189,32,113,65,124,69,228,114,235,175,124,170,215,232,133,205],
    51: [0,213,166,142,43,10,216,141,163,172,180,102,70,89,62,222,62,42,210,151,163,218,70,77,39,166,191,114,202,245,188,183,221,75,212,27,237,127,204,235,62,190,232,18,46,171,15,98,247,66,163,0],
    52: [0,116,50,86,186,50,220,251,89,192,46,86,127,124,19,184,233,151,215,22,14,59,145,37,242,203,134,254,89,190,94,59,65,124,113,100,233,235,121,22,76,86,97,39,242,200,220,101,33,239,254,116,51],
    53: [0,122,214,231,136,199,11,6,205,124,72,213,117,187,60,147,201,73,75,33,146,171,247,118,208,157,177,203,235,83,45,226,202,229,168,7,57,237,235,200,124,106,254,165,14,147,0,57,42,31,178,213,173,103],
    54: [0,183,26,201,87,210,221,113,21,46,65,45,50,238,184,249,225,102,58,209,218,109,165,26,95,184,192,52,245,35,254,238,175,172,79,123,25,122,43,120,108,215,80,128,201,235,8,153,59,101,31,198,76,31,156],
    55: [0,38,197,123,167,16,87,178,238,227,97,148,247,26,90,228,182,236,197,47,249,36,213,54,113,181,74,177,204,155,61,47,42,0,132,144,251,200,38,38,138,54,44,64,19,22,206,16,10,228,211,161,171,44,194,210],
    56: [0,106,120,107,157,164,216,112,116,2,91,248,163,36,201,202,229,6,144,254,155,135,208,170,209,12,139,127,142,182,249,177,174,190,28,10,85,239,184,101,124,152,206,96,23,163,61,27,196,247,151,154,202,207,20,61,10],
    57: [0,58,140,237,93,106,61,193,2,87,73,194,215,159,163,10,155,5,121,153,59,248,4,117,22,60,177,144,44,72,228,62,1,19,170,113,158,25,175,199,139,90,1,210,7,119,154,89,159,130,122,46,147,190,135,94,68,66],
    58: [0,82,116,26,247,66,27,62,107,252,182,200,185,235,55,251,242,210,144,154,237,176,141,192,248,152,249,206,85,253,142,65,165,125,23,24,30,122,240,214,6,129,218,29,145,127,134,206,245,117,29,41,63,159,142,233,125,148,123],
    59: [0,57,115,232,11,195,217,3,206,77,67,29,166,180,106,118,203,17,69,152,213,74,44,49,43,98,61,253,122,14,43,209,143,9,104,107,171,224,57,254,251,226,232,221,194,240,117,161,82,178,246,178,33,50,86,215,239,180,180,181],
    60: [0,107,140,26,12,9,141,243,197,226,197,219,45,211,101,219,120,28,181,127,6,100,247,2,205,198,57,115,219,101,109,160,82,37,38,238,49,160,209,121,86,11,124,30,181,84,25,194,87,65,102,190,220,70,27,209,16,89,7,33,240],
    61: [0,161,244,105,115,64,9,221,236,16,145,148,34,144,186,13,20,254,246,38,35,202,72,4,212,159,211,165,135,252,250,25,87,30,120,226,234,92,199,72,7,155,218,231,44,125,178,156,174,124,43,100,31,56,101,204,64,175,225,169,146,45],
    62: [0,65,202,113,98,71,223,248,118,214,94,0,122,37,23,2,228,58,121,7,105,135,78,243,118,70,76,223,89,72,50,70,111,194,17,212,126,181,35,221,117,235,11,229,149,147,123,213,40,115,6,200,100,26,246,182,218,127,215,36,186,110,106],
    63: [0,30,71,36,71,19,195,172,110,61,2,169,194,90,136,59,182,231,145,102,39,170,231,214,67,196,207,53,112,246,90,90,121,183,146,74,77,38,89,22,231,55,56,242,112,217,110,123,62,201,217,128,165,60,181,37,161,246,132,246,18,115,136,168],
    64: [0,45,51,175,9,7,158,159,49,68,119,92,123,177,204,187,254,200,78,141,149,119,26,127,53,160,93,199,212,29,24,145,156,208,150,218,209,4,216,91,47,184,146,47,140,195,195,125,242,238,63,99,108,140,230,242,31,204,11,178,243,217,156,213,231],
    65: [0,137,158,247,240,37,238,214,128,99,218,46,138,198,128,92,219,109,139,166,25,66,67,14,58,238,149,177,195,221,154,171,48,80,12,59,190,228,19,55,208,92,112,229,37,60,10,47,81,0,192,37,171,175,147,128,73,166,61,149,12,24,95,70,113,40],
    66: [0,5,118,222,180,136,136,162,51,46,117,13,215,81,17,139,247,197,171,95,173,65,137,178,68,111,95,101,41,72,214,169,197,95,7,44,154,77,111,236,40,121,143,63,87,80,253,240,126,217,77,34,232,106,50,168,82,76,146,67,106,171,25,132,93,45,105],
    67: [0,191,172,113,86,7,166,246,185,155,250,98,113,89,86,214,225,156,190,58,33,144,67,179,163,52,154,233,151,104,251,160,126,175,208,225,70,227,146,4,152,139,103,25,107,61,204,159,250,193,225,105,160,98,167,2,53,16,242,83,210,196,103,248,86,211,41,171],
    68: [0,247,159,223,33,224,93,77,70,90,160,32,254,43,150,84,101,190,205,133,52,60,202,165,220,203,151,93,84,15,84,253,173,160,89,227,52,199,97,95,231,52,177,41,125,137,241,166,225,118,2,54,32,82,215,175,198,43,238,235,27,101,184,127,3,5,8,163,238],
    69: [0,105,73,68,1,29,168,117,14,88,208,55,46,42,217,6,84,179,97,6,240,192,231,158,64,118,160,203,57,61,108,199,124,65,187,221,167,39,182,159,180,244,203,228,254,13,175,61,90,206,40,199,94,67,57,81,229,46,123,89,37,31,202,66,250,35,170,243,88,51],
    70: [0,39,120,171,35,186,162,126,243,221,140,37,3,23,150,7,195,96,20,87,47,59,42,121,246,151,9,146,101,223,88,157,4,205,26,253,95,88,211,178,178,127,74,188,120,76,240,184,174,5,62,171,173,63,231,112,69,11,60,163,80,230,66,18,123,216,134,84,102,90,120],
    71: [0,84,99,8,183,10,109,165,42,240,63,14,30,25,176,240,241,252,237,55,173,166,209,232,254,123,87,40,89,57,40,182,7,130,211,137,172,61,50,252,242,170,2,104,125,242,93,39,87,134,161,238,190,187,17,76,145,151,70,145,199,63,55,182,120,134,105,93,243,149,204,190],
    72: [0,170,230,73,106,244,19,198,167,125,168,23,93,138,9,97,50,129,224,103,227,123,147,230,196,217,145,204,69,131,215,220,118,219,222,153,142,224,109,177,147,65,131,118,127,78,90,233,28,133,121,168,88,35,227,203,195,58,41,241,12,13,229,2,115,217,109,150,83,121,94,105,6],
    73: [0,211,102,245,212,208,39,149,241,36,94,169,143,242,163,226,203,234,142,131,61,218,145,209,235,200,25,48,19,152,75,181,197,116,97,205,199,235,58,22,113,11,67,33,182,121,222,16,8,115,161,169,59,229,116,199,108,149,244,253,149,122,220,217,231,253,233,195,181,2,107,36,217,78],
    74: [0,78,10,239,251,181,125,36,59,232,127,217,156,159,134,247,199,254,114,171,211,174,107,74,81,106,130,50,240,224,218,163,25,62,116,202,118,159,191,93,80,99,135,91,219,43,132,15,168,217,10,76,182,67,177,210,226,184,202,68,28,126,196,75,58,236,136,186,93,222,110,171,15,156,151],
    75: [0,174,228,243,86,61,194,218,42,146,164,91,45,13,147,59,61,91,230,239,92,165,159,132,42,48,132,251,83,31,131,147,103,241,158,62,211,174,211,67,247,162,64,0,118,176,150,21,8,218,208,21,185,31,111,112,78,143,78,122,194,101,41,147,12,159,215,185,180,230,171,15,246,50,70,225],
    76: [0,88,238,120,4,65,243,201,138,43,247,42,88,71,170,241,42,122,236,14,74,215,64,98,14,178,243,167,198,43,107,229,1,233,251,18,240,181,140,1,135,243,41,98,196,244,197,208,183,227,123,133,44,203,244,215,149,164,206,167,162,181,185,161,253,27,52,178,93,231,93,245,4,195,133,58,45],
    77: [0,203,12,245,251,98,107,110,236,254,4,240,154,229,88,124,84,218,127,135,219,57,229,118,95,10,233,138,229,18,234,65,198,246,103,226,56,70,7,45,184,246,237,190,154,182,125,115,230,7,247,163,16,177,21,208,112,95,87,155,67,9,125,165,127,128,35,130,201,4,209,27,94,68,138,236,248,121],
    78: [0,187,111,3,105,74,124,213,129,81,199,236,81,24,230,26,206,244,207,10,69,186,55,12,99,75,49,112,184,33,193,176,18,172,100,62,248,125,135,151,212,24,224,115,230,124,47,27,121,38,11,16,30,133,234,224,89,42,2,20,39,153,192,89,115,241,120,97,137,96,221,127,115,142,250,225,155,53,198],
    79: [0,149,57,64,80,145,62,192,194,191,243,138,39,168,242,130,70,73,195,52,161,253,146,55,210,41,76,145,120,205,170,97,91,209,243,21,46,24,152,241,25,14,219,64,117,162,206,166,250,146,4,252,100,109,152,144,67,236,166,152,121,87,43,118,1,191,195,144,66,249,20,101,177,125,31,44,106,177,92,21],
    80: [0,143,13,4,135,114,127,124,167,250,92,176,190,120,125,136,168,186,18,34,197,84,207,140,247,146,36,166,147,135,81,68,6,21,19,158,254,71,45,252,109,76,203,53,60,43,238,64,128,14,106,239,75,173,122,56,236,208,99,55,247,163,226,218,24,71,139,213,107,172,167,149,145,181,8,74,174,122,210,164,100],
    81: [0,135,254,207,67,161,88,181,91,215,143,17,220,8,69,11,166,21,123,104,171,112,30,193,69,175,133,118,160,154,3,226,224,183,78,181,128,16,84,137,112,152,2,29,41,233,111,88,18,139,221,78,54,140,178,18,140,114,63,235,142,26,39,138,116,86,11,149,168,205,82,33,185,141,56,43,196,182,147,19,235,180],
    82: [0,34,145,92,169,247,34,41,47,38,7,222,215,192,111,109,195,173,112,108,140,240,212,170,21,151,61,114,11,66,176,47,26,45,139,139,50,44,183,75,151,54,232,237,171,113,200,115,196,183,245,92,47,18,44,228,1,172,123,98,221,75,56,105,190,77,180,175,3,165,14,102,223,80,170,245,64,103,106,110,244,214,6],
    83: [0,32,42,236,52,92,118,240,160,247,83,84,163,185,38,149,36,200,7,95,142,207,83,95,251,101,35,40,5,170,86,218,100,100,254,198,6,219,209,172,87,91,132,210,122,241,78,202,221,104,32,114,59,9,175,92,209,31,179,156,82,152,103,120,155,149,169,87,27,253,227,32,35,116,107,102,9,224,25,67,78,221,38,88],
    84: [0,15,23,116,179,213,201,52,87,88,20,143,8,116,14,59,59,24,17,228,112,192,33,204,159,59,223,252,169,147,173,111,254,157,37,41,48,158,112,181,167,10,152,93,78,175,189,63,36,112,191,139,64,4,149,206,56,222,21,195,123,251,163,150,153,97,224,59,177,5,43,228,203,166,126,22,104,152,129,224,18,38,28,103,171],
    85: [0,145,136,227,189,215,197,10,29,145,246,210,197,91,75,165,99,177,226,113,120,37,148,29,143,97,56,60,1,186,25,73,22,186,224,209,21,75,181,214,51,220,201,243,91,6,253,49,27,57,74,173,219,139,19,55,45,199,87,167,37,167,137,85,58,225,47,244,24,30,180,174,19,209,51,171,154,122,187,203,50,108,230,223,61,0],
    86: [0,217,83,157,117,42,16,78,59,159,120,253,81,97,122,43,22,34,196,139,77,117,65,216,40,153,166,220,136,90,136,252,56,26,70,213,6,120,170,100,156,176,228,109,58,91,156,185,85,120,91,128,70,111,226,252,221,5,136,50,81,153,125,131,65,202,247,139,26,204,22,128,37,97,166,168,120,244,229,78,101,212,117,242,253,217,85],
    87: [0,142,80,29,227,150,23,77,52,114,59,52,49,161,53,15,80,137,233,34,28,254,70,58,152,230,147,0,221,150,220,33,160,240,90,239,190,30,140,14,222,206,109,61,104,238,166,13,146,103,79,70,205,142,123,129,88,106,122,24,144,122,36,44,36,134,149,9,101,131,121,150,171,40,234,208,42,135,21,45,156,188,146,54,197,79,227,171],
    88: [0,150,13,34,107,13,139,92,59,115,22,254,111,137,125,209,60,203,89,79,186,213,215,71,2,95,232,244,9,243,33,125,204,97,57,12,224,222,58,247,144,25,147,205,64,37,66,31,237,172,70,66,155,30,162,34,228,236,231,18,126,193,13,218,212,113,89,174,234,214,56,2,201,182,185,29,90,65,175,100,131,251,130,91,17,31,97,66,3],
    89: [0,178,49,250,140,176,30,236,102,150,51,245,86,227,129,54,27,211,183,218,4,144,202,244,43,228,125,102,26,59,154,221,69,169,197,7,25,29,23,193,150,230,249,16,236,25,148,214,28,36,167,85,179,8,78,101,161,149,134,155,148,203,112,223,159,62,96,142,172,120,167,220,81,240,100,8,194,141,133,27,214,254,221,103,82,134,77,219,181,91],
    90: [0,37,191,145,215,68,52,241,105,52,200,133,191,61,78,172,241,37,50,171,2,76,247,90,75,128,117,109,253,190,84,201,24,148,128,6,134,199,199,17,210,95,58,232,161,56,250,155,70,196,145,41,57,146,170,131,87,196,161,172,144,84,236,181,23,123,159,8,254,172,187,190,158,234,17,37,32,104,68,99,0,196,83,53,208,58,39,58,193,128,180],
    91: [0,184,197,179,2,35,91,155,2,202,249,174,226,58,59,13,251,143,23,185,102,221,71,27,68,52,164,248,152,54,107,23,151,250,254,84,25,200,6,85,181,47,70,188,14,128,173,149,158,130,197,166,160,171,200,115,9,14,100,91,53,227,9,197,128,134,112,218,12,146,131,102,20,203,158,101,208,89,178,181,219,129,172,62,50,76,110,167,179,32,109,15],
    92: [0,249,154,250,101,142,123,4,236,164,209,33,77,158,121,59,157,218,194,223,181,131,26,171,70,110,153,105,101,18,36,111,38,187,166,20,168,156,72,212,59,83,87,10,35,46,55,137,217,28,196,28,95,84,35,210,58,1,238,95,37,201,217,35,209,49,188,236,32,224,170,111,252,130,192,52,82,75,228,101,111,158,170,216,124,238,193,48,98,83,78,9,106],
    93: [0,133,103,91,56,125,114,175,224,27,55,132,75,148,105,5,87,8,153,23,103,94,75,10,98,251,95,233,97,106,139,179,10,213,242,71,243,183,167,162,70,100,7,166,251,206,112,158,89,226,233,166,96,158,87,184,37,189,109,117,180,69,75,127,186,14,242,196,189,128,132,34,145,246,3,225,172,88,98,35,170,189,83,98,162,196,239,15,118,141,13,117,239,198],
    94: [0,177,31,84,196,124,141,210,184,59,217,22,218,190,139,33,77,237,242,26,202,60,82,103,236,68,25,219,14,146,16,71,122,229,57,191,83,47,238,46,64,155,68,130,196,211,61,4,154,142,220,247,23,203,205,25,55,212,86,32,246,1,242,29,67,35,251,39,193,74,80,40,112,183,163,80,134,222,155,204,148,37,158,55,88,23,241,105,129,205,115,96,136,120,36],
    95: [0,151,49,241,163,238,114,211,193,248,223,158,82,52,155,41,79,201,190,89,179,133,22,84,48,180,71,123,229,37,30,177,243,60,47,235,177,116,76,91,177,123,97,165,134,130,40,182,229,181,110,208,78,104,224,117,125,204,83,238,135,41,148,170,198,145,246,22,10,52,0,217,92,124,74,214,218,158,8,235,36,244,235,104,19,178,42,81,193,190,153,172,89,246,187,130],
    96: [0,226,98,79,140,25,48,4,14,77,232,239,38,246,92,132,162,23,229,112,62,185,170,99,104,67,3,244,208,72,251,11,169,1,208,45,41,30,220,4,42,56,140,14,244,143,34,236,227,76,224,173,114,234,200,211,37,94,150,55,161,5,8,151,159,96,176,92,68,199,53,212,89,179,90,200,172,62,19,163,142,207,7,1,143,184,17,212,244,74,213,30,240,19,133,101,225],
    97: [0,165,112,67,172,196,29,132,1,92,0,187,58,141,225,8,192,45,245,90,24,7,161,186,58,62,84,115,13,245,225,171,197,121,88,145,45,88,73,87,149,115,12,251,32,192,241,169,220,13,58,226,18,209,14,126,70,200,234,61,172,225,166,205,79,251,66,216,77,196,139,204,23,115,84,155,97,210,117,113,9,252,164,222,234,247,217,126,59,64,36,29,37,109,100,241,135,66],
    98: [0,114,0,30,109,177,149,62,78,28,219,159,210,110,69,90,17,24,216,55,206,173,187,126,94,220,28,145,88,254,92,94,51,98,157,229,94,41,80,144,181,171,20,72,218,184,239,70,102,210,199,9,20,62,193,144,189,182,34,94,127,185,80,57,82,120,170,55,150,154,85,239,219,253,224,98,1,84,214,160,163,68,158,73,149,32,229,20,177,83,230,56,240,110,139,157,224,180,163],
    99: [0,243,78,47,201,243,4,56,137,234,29,252,56,136,167,63,228,233,69,155,45,229,227,26,163,130,60,218,247,203,230,90,103,81,8,172,52,219,162,25,112,77,205,209,168,244,105,197,132,221,15,24,187,193,175,197,81,175,145,23,34,14,169,100,63,252,168,33,118,101,172,59,128,68,236,112,73,117,217,131,84,96,103,196,129,76,143,161,200,75,123,124,141,187,14,70,14,143,151,6],
    100: [0,234,198,116,209,71,61,157,122,29,226,53,140,228,184,152,192,180,14,254,136,59,19,57,54,190,216,241,56,98,170,219,90,124,237,14,241,168,76,98,239,254,102,130,41,185,156,54,250,242,17,86,193,96,42,170,125,58,129,125,209,167,244,180,97,224,36,22,87,60,110,137,194,223,42,115,78,180,241,125,46,8,122,132,243,47,178,66,77,89,106,8,200,79,82,191,173,179,105,240,105]
}

test('Generator Polynominal Test', function() {
    var genpn = new GeneratorPolynominal();

    for(var degree in generatorPolynominalDataProvider) {
        if(generatorPolynominalDataProvider.hasOwnProperty(degree)) {
            var actual = genpn.polynominal(degree);
            var expected = generatorPolynominalDataProvider[degree];
            deepEqual(actual, expected, 'Degree ' + degree);
        }
    }
});