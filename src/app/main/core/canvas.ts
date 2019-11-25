export class Canvas {
    public context: CanvasRenderingContext2D;
    zoom = 20;
    clusters = [];
    functionalQuality = 0.0;
    colors = [
        '#F58A45',
        '#F5E613',
        '#310EF5',
        '#DB0800',
        '#AB4533',
        '#79146C',
        '#0FD611',
        '#242305'
    ];

    drawDots() {
        let colorIndex = 0;
        for (let cluster of this.clusters) {
            for (let obj of cluster.objects) {
                let x = obj.attributes[0];
                let y = obj.attributes[1];
                this.drawCartesianPoint(this.context, x, y, colorIndex);

            }

            let x = cluster.center.attributes[0];
            let y = cluster.center.attributes[1];
            this.drawCartesianPoint(this.context, x, y, 7);
            this.drawCartesianText(this.context, x, y, "(" + x + ", " + y + ")");
            colorIndex++;
        }
    }

    drawCortesian(canvasEl) {
        this.context = (canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');

        // Center
        this.context.translate(300, 300);

        // Add some lines
        this.context.beginPath();
        this.context.moveTo(-300, 0);
        this.context.lineTo(300, 0);
        this.context.stroke();
        this.context.moveTo(0, -300);
        this.context.lineTo(0, 300);
        this.context.stroke();

        this.context.font = "12px Arial";
        this.context.fillText("+ x", 280, -10);
        this.context.fillText("- y", 10, 280);

        this.context.fillText("- x", -300, -10);
        this.context.fillText("+ y", 10, -280);
    }

    drawCartesianPoint(ctx, x, y, color) {
        x = x * this.zoom;
        y = y * this.zoom;
        ctx.fillStyle = this.colors[color];
        ctx.fillRect(x, -(y), 7, 7);
        ctx.fillStyle = "#111111"
    }

    drawCartesianText(ctx, x, y, text) {
        x = x * this.zoom;
        y = y * this.zoom;
        ctx.fillText(text, x, -(y));
    }
}
