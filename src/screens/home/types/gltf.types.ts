import type { GLTFParser } from "three-stdlib";
import {
  AnimationClip,
  Camera,
  Group,
  Mesh,
  MeshStandardMaterial,
} from "three";

export interface GLTF {
  animations: AnimationClip[];
  scene: Group;
  scenes: Group[];
  cameras: Camera[];
  asset: {
    copyright?: string;
    generator?: string;
    version?: string;
    minVersion?: string;
    extensions?: any;
    extras?: any;
  };
  parser: GLTFParser;
  userData: any;
}

export type PlanetGLTFType = GLTF & {
  nodes: {
    Object_4: Mesh;
    Object_6: Mesh;
  };
  materials: {
    Clouds: MeshStandardMaterial;
    Planet: MeshStandardMaterial;
  };
};
