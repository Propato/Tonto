/******************************************************************************
 * This file was generated by langium-cli 0.4.0.
 * DO NOT EDIT MANUALLY!
 ******************************************************************************/

/* eslint-disable @typescript-eslint/array-type */
/* eslint-disable @typescript-eslint/no-empty-interface */
import { AstNode, AstReflection, Reference, isAstNode, TypeMetaData } from 'langium';

export type AuxiliaryDeclarations = DataType | ElementRelation | EnumData | GeneralizationSet;

export const AuxiliaryDeclarations = 'AuxiliaryDeclarations';

export function isAuxiliaryDeclarations(item: unknown): item is AuxiliaryDeclarations {
    return reflection.isInstance(item, AuxiliaryDeclarations);
}

export type BaseSortalStereotype = 'historicalRole' | 'phase' | 'relator' | 'role' | 'subkind';

export type BasicDataTypes = 'Date' | 'boolean' | 'number' | 'string';

export type Element = AuxiliaryDeclarations | ClassElement;

export const Element = 'Element';

export function isElement(item: unknown): item is Element {
    return reflection.isInstance(item, Element);
}

export type NonSortalStereotype = 'category' | 'event' | 'historicalRoleMixin' | 'mixin' | 'phaseMixin' | 'roleMixin';

export type OntologicalNature = 'abstracts' | 'collectives' | 'events' | 'extrinsic-modes' | 'functional-complexes' | 'intrinsic-modes' | 'modes' | 'objects' | 'qualities' | 'quantities' | 'relators' | 'types';

export type QualifiedName = string;

export type RelationStereotype = 'aggregation' | 'bringsAbout' | 'characterization' | 'comparative' | 'componentOf' | 'composition' | 'creation' | 'derivation' | 'externalDependence' | 'formal' | 'historicalDependence' | 'inherence' | 'instantiation' | 'manifestation' | 'material' | 'mediation' | 'memberOf' | 'participation' | 'participational' | 'relator' | 'subCollectionOf' | 'subQuantityOf' | 'termination' | 'triggers' | 'value';

export type UltimateSortalStereotypes = 'collective' | 'extrinsicMode' | 'intrinsicMode' | 'kind' | 'mode' | 'quality' | 'quantity';

export interface Attribute extends AstNode {
    readonly $container: ClassElement;
    attributeType: BasicDataTypes | Reference<DataType>
    cardinality?: Cardinality
    isConst: boolean
    isOrdered: boolean
    name: string
}

export const Attribute = 'Attribute';

export function isAttribute(item: unknown): item is Attribute {
    return reflection.isInstance(item, Attribute);
}

export interface Cardinality extends AstNode {
    readonly $container: Attribute | DataTypeProperty | ElementRelation;
    lowerBound: '*' | number
    upperBound?: '*' | number
}

export const Cardinality = 'Cardinality';

export function isCardinality(item: unknown): item is Cardinality {
    return reflection.isInstance(item, Cardinality);
}

export interface ClassElement extends AstNode {
    readonly $container: ClassElement | ContextModule;
    attributes: Array<Attribute>
    classElementType?: EndurantType
    instanceOf?: Reference<ClassElement>
    name: QualifiedName
    ontologicalNatures?: ElementOntologicalNature
    references: Array<ElementRelation>
    specializationEndurants: Array<Reference<ClassElement>>
}

export const ClassElement = 'ClassElement';

export function isClassElement(item: unknown): item is ClassElement {
    return reflection.isInstance(item, ClassElement);
}

export interface ContextModule extends AstNode {
    readonly $container: Model;
    elements: Array<Element>
    name: string
}

export const ContextModule = 'ContextModule';

export function isContextModule(item: unknown): item is ContextModule {
    return reflection.isInstance(item, ContextModule);
}

export interface DataType extends AstNode {
    readonly $container: ClassElement | ContextModule;
    name: string
    properties: Array<DataTypeProperty>
}

export const DataType = 'DataType';

export function isDataType(item: unknown): item is DataType {
    return reflection.isInstance(item, DataType);
}

export interface DataTypeProperty extends AstNode {
    readonly $container: DataType;
    cardinality?: Cardinality
    isConst: boolean
    isOrdered: boolean
    name: string
    type: BasicDataTypes | Reference<DataType>
}

export const DataTypeProperty = 'DataTypeProperty';

export function isDataTypeProperty(item: unknown): item is DataTypeProperty {
    return reflection.isInstance(item, DataTypeProperty);
}

export interface ElementOntologicalNature extends AstNode {
    readonly $container: ClassElement;
    natures: Array<OntologicalNature>
}

export const ElementOntologicalNature = 'ElementOntologicalNature';

export function isElementOntologicalNature(item: unknown): item is ElementOntologicalNature {
    return reflection.isInstance(item, ElementOntologicalNature);
}

export interface ElementRelation extends AstNode {
    readonly $container: ClassElement | ContextModule;
    firstCardinality?: Cardinality
    firstEnd?: Reference<ClassElement>
    firstEndMetaAttributes: Array<RelationMetaAttribute>
    firstEndName?: string
    hasInverse?: 'inverseOf'
    inverseEnd?: Reference<ElementRelation>
    isAssociation: boolean
    isComposition: boolean
    name?: QualifiedName
    relationType?: RelationStereotype
    secondCardinality?: Cardinality
    secondEnd: Reference<ClassElement>
    secondEndMetaAttributes: Array<RelationMetaAttribute>
    secondEndName?: string
    specializeRelation?: Reference<ElementRelation>
}

export const ElementRelation = 'ElementRelation';

export function isElementRelation(item: unknown): item is ElementRelation {
    return reflection.isInstance(item, ElementRelation);
}

export interface EndurantType extends AstNode {
    readonly $container: ClassElement;
    stereotype: BaseSortalStereotype | NonSortalStereotype | UltimateSortalStereotypes
}

export const EndurantType = 'EndurantType';

export function isEndurantType(item: unknown): item is EndurantType {
    return reflection.isInstance(item, EndurantType);
}

export interface EnumData extends AstNode {
    readonly $container: ClassElement | ContextModule;
    elements: Array<EnumElement>
    name: string
}

export const EnumData = 'EnumData';

export function isEnumData(item: unknown): item is EnumData {
    return reflection.isInstance(item, EnumData);
}

export interface EnumElement extends AstNode {
    readonly $container: EnumData;
    name: string
}

export const EnumElement = 'EnumElement';

export function isEnumElement(item: unknown): item is EnumElement {
    return reflection.isInstance(item, EnumElement);
}

export interface GeneralizationSet extends AstNode {
    readonly $container: ClassElement | ContextModule;
    categorizerItems: Array<Reference<Element>>
    complete?: 'complete'
    disjoint?: 'disjoint'
    generalItem: Array<Reference<Element>>
    name: string
    specificItems: Array<Reference<Element>>
}

export const GeneralizationSet = 'GeneralizationSet';

export function isGeneralizationSet(item: unknown): item is GeneralizationSet {
    return reflection.isInstance(item, GeneralizationSet);
}

export interface Import extends AstNode {
    readonly $container: Model;
    referencedModel: Array<Reference<Model>>
}

export const Import = 'Import';

export function isImport(item: unknown): item is Import {
    return reflection.isInstance(item, Import);
}

export interface Model extends AstNode {
    imports: Array<Import>
    modules: Array<ContextModule>
}

export const Model = 'Model';

export function isModel(item: unknown): item is Model {
    return reflection.isInstance(item, Model);
}

export interface RelationMetaAttribute extends AstNode {
    readonly $container: ElementRelation;
    isConst: boolean
    isDerived: boolean
    isOrdered: boolean
    redefinesRelation?: Reference<ElementRelation>
    subsetRelation?: Reference<ElementRelation>
}

export const RelationMetaAttribute = 'RelationMetaAttribute';

export function isRelationMetaAttribute(item: unknown): item is RelationMetaAttribute {
    return reflection.isInstance(item, RelationMetaAttribute);
}

export type TontoAstType = 'Attribute' | 'AuxiliaryDeclarations' | 'Cardinality' | 'ClassElement' | 'ContextModule' | 'DataType' | 'DataTypeProperty' | 'Element' | 'ElementOntologicalNature' | 'ElementRelation' | 'EndurantType' | 'EnumData' | 'EnumElement' | 'GeneralizationSet' | 'Import' | 'Model' | 'RelationMetaAttribute';

export type TontoAstReference = 'Attribute:attributeType' | 'ClassElement:instanceOf' | 'ClassElement:specializationEndurants' | 'DataTypeProperty:type' | 'ElementRelation:firstEnd' | 'ElementRelation:inverseEnd' | 'ElementRelation:secondEnd' | 'ElementRelation:specializeRelation' | 'GeneralizationSet:categorizerItems' | 'GeneralizationSet:generalItem' | 'GeneralizationSet:specificItems' | 'Import:referencedModel' | 'RelationMetaAttribute:redefinesRelation' | 'RelationMetaAttribute:subsetRelation';

export class TontoAstReflection implements AstReflection {

    getAllTypes(): string[] {
        return ['Attribute', 'AuxiliaryDeclarations', 'Cardinality', 'ClassElement', 'ContextModule', 'DataType', 'DataTypeProperty', 'Element', 'ElementOntologicalNature', 'ElementRelation', 'EndurantType', 'EnumData', 'EnumElement', 'GeneralizationSet', 'Import', 'Model', 'RelationMetaAttribute'];
    }

    isInstance(node: unknown, type: string): boolean {
        return isAstNode(node) && this.isSubtype(node.$type, type);
    }

    isSubtype(subtype: string, supertype: string): boolean {
        if (subtype === supertype) {
            return true;
        }
        switch (subtype) {
            case ClassElement:
            case AuxiliaryDeclarations: {
                return this.isSubtype(Element, supertype);
            }
            case DataType:
            case ElementRelation:
            case EnumData:
            case GeneralizationSet: {
                return this.isSubtype(AuxiliaryDeclarations, supertype);
            }
            default: {
                return false;
            }
        }
    }

    getReferenceType(referenceId: TontoAstReference): string {
        switch (referenceId) {
            case 'Attribute:attributeType': {
                return DataType;
            }
            case 'ClassElement:instanceOf': {
                return ClassElement;
            }
            case 'ClassElement:specializationEndurants': {
                return ClassElement;
            }
            case 'DataTypeProperty:type': {
                return DataType;
            }
            case 'ElementRelation:firstEnd': {
                return ClassElement;
            }
            case 'ElementRelation:inverseEnd': {
                return ElementRelation;
            }
            case 'ElementRelation:secondEnd': {
                return ClassElement;
            }
            case 'ElementRelation:specializeRelation': {
                return ElementRelation;
            }
            case 'GeneralizationSet:categorizerItems': {
                return Element;
            }
            case 'GeneralizationSet:generalItem': {
                return Element;
            }
            case 'GeneralizationSet:specificItems': {
                return Element;
            }
            case 'Import:referencedModel': {
                return Model;
            }
            case 'RelationMetaAttribute:redefinesRelation': {
                return ElementRelation;
            }
            case 'RelationMetaAttribute:subsetRelation': {
                return ElementRelation;
            }
            default: {
                throw new Error(`${referenceId} is not a valid reference id.`);
            }
        }
    }

    getTypeMetaData(type: string): TypeMetaData {
        switch (type) {
            case 'Attribute': {
                return {
                    name: 'Attribute',
                    mandatory: [
                        { name: 'isConst', type: 'boolean' },
                        { name: 'isOrdered', type: 'boolean' }
                    ]
                };
            }
            case 'ClassElement': {
                return {
                    name: 'ClassElement',
                    mandatory: [
                        { name: 'attributes', type: 'array' },
                        { name: 'references', type: 'array' },
                        { name: 'specializationEndurants', type: 'array' }
                    ]
                };
            }
            case 'ContextModule': {
                return {
                    name: 'ContextModule',
                    mandatory: [
                        { name: 'elements', type: 'array' }
                    ]
                };
            }
            case 'DataType': {
                return {
                    name: 'DataType',
                    mandatory: [
                        { name: 'properties', type: 'array' }
                    ]
                };
            }
            case 'DataTypeProperty': {
                return {
                    name: 'DataTypeProperty',
                    mandatory: [
                        { name: 'isConst', type: 'boolean' },
                        { name: 'isOrdered', type: 'boolean' }
                    ]
                };
            }
            case 'ElementOntologicalNature': {
                return {
                    name: 'ElementOntologicalNature',
                    mandatory: [
                        { name: 'natures', type: 'array' }
                    ]
                };
            }
            case 'ElementRelation': {
                return {
                    name: 'ElementRelation',
                    mandatory: [
                        { name: 'firstEndMetaAttributes', type: 'array' },
                        { name: 'isAssociation', type: 'boolean' },
                        { name: 'isComposition', type: 'boolean' },
                        { name: 'secondEndMetaAttributes', type: 'array' }
                    ]
                };
            }
            case 'EnumData': {
                return {
                    name: 'EnumData',
                    mandatory: [
                        { name: 'elements', type: 'array' }
                    ]
                };
            }
            case 'GeneralizationSet': {
                return {
                    name: 'GeneralizationSet',
                    mandatory: [
                        { name: 'categorizerItems', type: 'array' },
                        { name: 'generalItem', type: 'array' },
                        { name: 'specificItems', type: 'array' }
                    ]
                };
            }
            case 'Import': {
                return {
                    name: 'Import',
                    mandatory: [
                        { name: 'referencedModel', type: 'array' }
                    ]
                };
            }
            case 'Model': {
                return {
                    name: 'Model',
                    mandatory: [
                        { name: 'imports', type: 'array' },
                        { name: 'modules', type: 'array' }
                    ]
                };
            }
            case 'RelationMetaAttribute': {
                return {
                    name: 'RelationMetaAttribute',
                    mandatory: [
                        { name: 'isConst', type: 'boolean' },
                        { name: 'isDerived', type: 'boolean' },
                        { name: 'isOrdered', type: 'boolean' }
                    ]
                };
            }
            default: {
                return {
                    name: type,
                    mandatory: []
                };
            }
        }
    }
}

export const reflection = new TontoAstReflection();
