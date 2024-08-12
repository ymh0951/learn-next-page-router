describe('상품의 상세 페이지', () => { 
    beforeEach(() => {
        cy.visit("/products/0");
    })

    // 첫 번째 테스트 시나리오
    it('상품 상세 페이지로 진입하면 상품의 이름과 가격이 정상적으로 표시된다.', () => {
        // assertion
        cy.getByCy('product-image').should('be.visible');
        cy.getByCy("product-name").should("be.visible");
        cy.getByCy("product-price").should("be.visible");
    })

    // 두 번째 테스트 시나리오
    it('장바구니에 담기 버튼을 클릭하면 "장바구니에 추가됨"이 표시된다.', () => {
        // preapre
        const stub = cy.stub();
        cy.on('window:alert', stub);

        // action
        cy.getByCy("cart-button")
          .click()
          .then(() => {
            // asssertion
            expect(stub.getCall(0)).to.be.calledWith('장바구니에 추가됨');
          });
    })

    // 세 번째 테스트 시나리오
    it.only('장바구니 버튼을 클릭하면 장바구니 페이지로 이동한다', () => {
        // prepare

        // action
        cy.getByCy('cart-button').click();

        // assertion
        cy.url().should('include', '/cart');
    })
})