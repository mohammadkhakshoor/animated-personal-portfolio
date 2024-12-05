import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    // fill: "rgba(0, 0, 0, 1)",
    fill: "rgba(255, 255, 255, 1)",
    transition: {
      pathLength: { duration: 3, ease: "easeInOut" },
      fill: { duration: 3, delay: 2, ease: "easeInOut" },
      opacity: { duration: 0.5 },
    },
  },
};
export const AnimatedLogo = () => {
  return (
    <motion.svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100%"
      viewBox="0 0 1024 1024"
      initial="hidden"
      animate="visible"
      className="w-full max-w-2xl mx-auto"
    >
      <motion.path
        variants={pathVariants}
        fill="#fff"
        stroke="#fff"
        strokeWidth="2"
        d="M427.696289,136.564926 C462.501343,128.488297 497.324097,127.410011 532.430786,129.483017 C551.100220,130.585419 569.648438,132.639374 587.953369,136.122528 C601.956848,138.787170 615.746887,142.817795 629.402588,146.991043 C641.136292,150.576904 652.702759,154.839828 664.064209,159.485535 C685.495483,168.248734 705.883423,179.084854 725.574402,191.303772 C738.887573,199.565094 751.780212,208.354889 764.019043,218.131241 C783.346802,233.570312 800.772888,250.970978 816.801147,269.748932 C831.638062,287.131256 844.822998,305.749146 856.277588,325.538025 C860.528076,332.881226 864.271729,340.518829 868.210938,348.040771 C870.096313,351.640900 868.835022,354.276062 865.792664,356.669403 C846.428650,371.902252 827.114197,387.198181 807.814880,402.512970 C778.490784,425.782745 749.185791,449.076569 719.885864,472.376831 C707.647095,482.109497 695.443726,491.886688 683.221497,501.640137 C678.441650,505.454468 677.975464,507.187622 681.012451,513.771179 C688.407654,529.802307 695.822937,545.826904 703.484619,561.731506 C713.960571,583.478455 723.597290,605.599487 733.441101,627.631287 C740.705383,643.889587 748.349609,659.978088 755.816589,676.145874 C756.444275,677.504944 757.163696,678.847595 757.579407,680.273987 C759.058350,685.347168 757.150085,688.187317 751.886963,688.107666 C742.231201,687.961731 732.582031,687.429077 722.927429,687.152039 C715.266785,686.932129 707.602234,686.854553 699.939392,686.710754 C695.884460,686.634705 693.297852,684.927368 691.642517,680.928162 C678.008423,647.988037 661.033081,616.590820 646.696045,583.966370 C641.680237,572.552734 636.079712,561.391479 630.572510,550.200439 C628.091248,545.158264 626.644897,544.951782 622.194458,548.317505 C605.192688,561.175171 588.854980,574.860413 572.336304,588.320923 C569.112793,590.947632 565.881409,593.655640 562.319458,595.760620 C545.023804,605.981689 543.835999,624.369629 539.493835,640.973511 C536.046204,654.157104 533.771912,667.644897 530.846313,680.969055 C529.881958,685.360840 526.833313,687.501465 522.375427,686.925476 C507.923645,685.057922 493.540924,684.985291 479.044678,686.903870 C470.933441,687.977295 468.952576,685.252563 471.050995,677.367188 C475.199890,661.776550 480.117706,646.371643 483.734833,630.663635 C487.393738,614.774414 491.689819,599.055176 496.155090,583.415527 C499.849426,570.476074 503.120575,557.425110 506.807770,544.485962 C512.415466,524.807251 517.486267,504.974976 522.706665,485.187195 C523.176453,483.406616 524.873962,481.081268 522.634827,479.724792 C520.375000,478.355743 518.938416,480.821777 517.817322,482.230957 C503.699860,499.976044 487.168213,515.534790 472.330505,532.622925 C457.280273,549.955811 442.147888,567.218018 427.193573,584.633179 C423.783630,588.604370 419.993622,590.504700 414.654266,590.387268 C401.827728,590.105103 388.989960,590.173645 376.159454,590.328430 C372.139618,590.376892 369.337616,589.086060 367.961426,585.275574 C365.139618,577.462402 362.189362,569.687561 359.650513,561.781860 C355.277039,548.162964 349.842224,534.934448 345.138336,521.444580 C340.046143,506.841248 333.323822,492.835297 329.291687,477.846619 C328.745422,475.816071 328.050079,473.189850 325.280518,473.552704 C322.926666,473.861084 322.843811,476.408417 322.350403,478.306885 C317.082367,498.578400 311.794952,518.844971 306.574860,539.128845 C304.377594,547.666809 302.454132,556.276367 300.185760,564.794678 C294.368591,586.639221 288.450653,608.457092 282.529541,630.273865 C277.650391,648.251648 272.792480,666.235718 267.956848,684.223816 C263.342529,701.388794 259.451630,718.753174 253.981674,735.705627 C251.647903,742.938354 250.684677,750.622559 249.238708,758.128601 C248.529205,761.811707 249.772934,764.907837 252.402695,767.666077 C265.874542,781.796387 280.224701,794.911072 296.064209,806.375732 C313.748566,819.175781 332.082733,830.868042 351.644775,840.649658 C365.621246,847.638306 380.085571,853.474426 394.740479,858.697815 C405.456024,862.517151 416.592743,865.274536 427.624054,868.251343 C444.779053,872.880737 462.152985,875.265320 479.706604,877.227661 C498.683746,879.349121 517.629578,879.032715 536.583984,877.479370 C550.192200,876.364136 563.746765,874.906189 577.087463,871.646912 C592.910889,867.781067 608.651428,863.800720 624.131042,858.597351 C643.287720,852.157898 661.637024,844.011353 679.350586,834.460327 C698.710510,824.021545 716.854004,811.671387 733.937256,797.766968 C751.697632,783.311462 768.093201,767.511292 782.016541,749.290955 C794.968811,732.341309 806.676514,714.556824 816.967957,695.849670 C830.834412,670.644165 841.472778,644.102417 849.038452,616.401367 C854.792603,595.333008 857.916809,573.713806 859.658203,551.963806 C861.778076,525.484924 861.477600,499.005981 856.804626,472.770172 C854.031250,457.199677 850.073120,441.877411 844.678284,426.986603 C843.163818,422.806244 844.413269,419.680573 847.410950,417.193176 C858.685364,407.837891 869.892700,398.415344 880.766113,388.588013 C884.354309,385.344971 888.183594,386.945526 889.588013,392.248383 C894.191528,409.629791 899.900635,426.737274 903.087769,444.472626 C907.011108,466.304779 908.976257,488.295776 909.514465,510.516632 C910.129089,535.890137 909.376892,561.151184 906.215271,586.289673 C902.254578,617.782104 894.031128,648.165405 882.243469,677.715820 C873.639404,699.285339 863.625671,720.097168 851.477173,739.773804 C833.044739,769.628296 811.034241,796.756653 785.696594,821.078796 C765.684814,840.288391 743.887207,857.256531 719.935303,871.295227 C700.977539,882.406555 681.238464,892.102173 660.874390,900.294006 C635.023865,910.692810 608.120239,917.280029 580.516602,921.532776 C555.564575,925.377075 530.582153,927.501099 505.390747,926.932739 C464.587158,926.012085 424.297028,921.153442 385.299042,908.615662 C332.930206,891.779175 285.949738,865.317749 244.819077,828.609802 C226.001648,811.815735 208.653259,793.713013 193.372284,773.612122 C189.900253,769.044922 189.131195,764.667664 190.608047,759.198853 C196.808029,736.240112 202.670761,713.190552 208.787918,690.209106 C212.631546,675.768982 216.746185,661.401306 220.666580,646.981323 C223.583527,636.252258 226.390503,625.493347 229.234634,614.744507 C233.144913,599.966370 236.995499,585.172119 240.961227,570.408936 C245.139984,554.852600 249.405991,539.319702 253.666626,523.785522 C259.910004,501.022095 266.599152,478.370850 272.324249,455.478210 C277.935699,433.040253 285.102844,411.028381 290.115204,388.421265 C291.424622,382.515381 293.479584,376.651367 295.174805,370.761597 C296.155823,367.353363 298.495331,365.766571 302.207947,365.585785 C316.361328,364.896667 330.513672,364.469025 344.681091,364.882874 C351.962433,365.095612 353.742554,366.433411 355.842804,373.200409 C368.430389,413.757935 382.966553,453.657318 396.590515,493.864716 C399.421326,502.219086 402.375824,510.532196 405.340576,518.840332 C407.864716,525.913574 409.394775,526.289001 414.659729,520.665344 C423.651611,511.060791 432.528564,501.346222 441.329926,491.566315 C454.245697,477.214508 467.141449,462.842712 479.885895,448.338959 C501.759369,423.445801 523.598267,398.520844 545.238098,373.425049 C549.695984,368.255188 554.433228,365.381439 561.512268,365.631927 C573.659851,366.061829 585.833130,365.737701 597.995361,365.787048 C606.743103,365.822510 608.259949,367.899475 606.041809,376.485016 C598.884399,404.189026 591.429504,431.821228 584.699646,459.628876 C580.317566,477.735748 576.780762,496.048096 571.722229,513.998718 C571.320496,515.424377 570.718079,517.099487 572.429810,518.022705 C574.069946,518.907288 575.294434,517.503540 576.385071,516.598511 C586.373718,508.310364 596.303162,499.964355 606.508545,491.926117 C640.498779,465.153870 674.325867,438.172699 708.070740,411.091339 C735.198669,389.320251 762.107971,367.276886 789.141968,345.388550 C791.723145,343.298706 794.546875,341.511047 797.177002,339.478394 C800.528564,336.888367 801.534607,334.073059 798.821228,330.097900 C785.642456,310.790863 771.184937,292.558655 754.263306,276.377686 C732.371826,255.444443 708.283264,237.333069 681.839722,222.643173 C655.884766,208.224640 628.683960,196.579346 599.895569,188.748383 C570.461548,180.741821 540.505127,176.956696 510.100800,176.483368 C490.205170,176.173630 470.572571,179.053635 451.050049,182.586853 C414.494720,189.202698 380.501099,202.876205 347.772308,220.097137 C323.764008,232.729584 301.837769,248.268311 281.502411,266.175049 C266.847321,279.079834 252.980148,292.734314 240.782379,307.996735 C228.813019,322.973328 218.482773,339.057556 208.712723,355.552155 C198.411987,372.942749 189.635834,391.043671 182.324356,409.835907 C177.378891,422.546997 173.606384,435.682129 170.138641,448.877899 C165.775055,465.482605 162.235260,482.298828 160.218231,499.327789 C157.920380,518.727539 158.095428,538.290833 160.368591,557.674927 C163.535660,584.681458 169.516037,611.156128 177.967667,637.020203 C182.732086,651.600525 182.813446,651.432800 170.532913,660.873474 C162.754761,666.853027 155.228836,673.166138 147.692230,679.452393 C143.257385,683.151550 140.309219,682.515198 138.436829,677.059875 C127.825287,646.142578 118.344589,614.890808 115.081810,582.222656 C112.782600,559.202087 110.305092,536.098999 111.063965,512.935913 C111.641449,495.309326 115.236168,477.940430 117.967598,460.514496 C120.704582,443.053009 124.307861,425.848145 129.782013,409.002777 C139.227875,379.935486 151.109558,352.004761 166.506653,325.549744 C184.544922,294.556580 206.697922,266.768219 232.029602,241.560486 C248.210556,225.458710 266.144745,211.329086 285.050446,198.467056 C302.692535,186.464691 321.248688,176.103928 340.380615,166.692657 C358.465607,157.796387 377.188599,150.505356 396.406250,144.591553 C406.544037,141.471832 416.777985,138.454529 427.696289,136.564926 z"
      />
    </motion.svg>
  );
};

export default AnimatedLogo;
