namespace Manifesto {
    export class Resource extends ManifestResource implements IResource{

        constructor(jsonld?: any, options?: IManifestoOptions){
            super(jsonld, options);
        }

        getFormat(): MediaType | null {
            const format: string = this.getProperty('format');

            if (format) {
                return new MediaType(format.toLowerCase());
            }

            return null;
        }

        getType(): ResourceType | null {
            const type: string = this.getProperty('type');

            if (type) {
                return new ResourceType(Utils.normaliseType(type));
            }

            return null;
        }

        getWidth(): number {
            return this.getProperty('width');
        }

        getHeight(): number {
            return this.getProperty('height');
        }

        getMaxWidth(): number {
            return this.getProperty('maxWidth');
        }

        getMaxHeight(): number | null {
            const maxHeight = this.getProperty('maxHeight');

            // if a maxHeight hasn't been specified, default to maxWidth.
            // maxWidth in essence becomes maxEdge
            if (!maxHeight) {
                return this.getMaxWidth();
            }

            return null;
        }
    }
}
