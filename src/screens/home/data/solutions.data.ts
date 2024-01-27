import { SolutionType } from "@/screens/home/types/solutions.types";

import modelingImage from "../../../shared/assets/images/3d-modeling.webp";
import editorImage from "../../../shared/assets/images/3d-editor.webp";
import communityAssetsImage from "../../../shared/assets/images/community-assets.webp";
import dynamicLightningImage from "../../../shared/assets/images/dynamic-lightning-setup.webp";
import layerBasedImage from "../../../shared/assets/images/layer-based-workflow.webp";
import magicMaterialsImage from "../../../shared/assets/images/magic-material.webp";

export const solutionsData: SolutionType[] = [
  {
    imageSrc: modelingImage,
    heading: "3D Modeling",
    description: "Vert based modeling, sculpting, polygon and many more.",
  },
  {
    imageSrc: layerBasedImage,
    heading: "Layer Based Workflow",
    description:
      "Work in layers that everybody loves, keep your work well organized.",
  },
  {
    imageSrc: dynamicLightningImage,
    heading: "Dynamic Lighting Setup",
    description:
      "We provide next-gen lightning setup for your next awesome project.",
  },
  {
    imageSrc: magicMaterialsImage,
    heading: "Magic Material",
    description:
      "Do you have problem with material? Well our material tool will keep that problem away.",
  },
  {
    imageSrc: editorImage,
    heading: "A.I. Styler ",
    description:
      "Get your work done with Artificial Intelligence, relax and our A.I. will do the rest.",
  },
  {
    imageSrc: communityAssetsImage,
    heading: "Community Assets",
    description:
      "With our growing community you can easily finish your project is no time.",
  },
];
